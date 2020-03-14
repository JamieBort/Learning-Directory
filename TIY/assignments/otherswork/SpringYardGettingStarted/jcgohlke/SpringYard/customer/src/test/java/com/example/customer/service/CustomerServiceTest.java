package com.example.customer.service;

import com.example.customer.model.Customer;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.dao.DataIntegrityViolationException;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerServiceTest {

  @Autowired
  CustomerService customerService;

  @Test
  public void testTransactional() {

    Customer customer1 = new Customer();
    customer1.setFirstName("Bob");
    customer1.setLastName("Smith");

    Customer customer2 = new Customer();
    customer2.setFirstName("Steve");
    customer2.setLastName("Rogers");

    List<Customer> customers = new ArrayList();
    customers.add(customer1);
    customers.add(customer2);

    customerService.add(customers);

    Customer customer3 = new Customer();
    customer3.setFirstName("Kathryn");
    customer3.setLastName("Janeway");

    Customer customer4 = new Customer();
    customer4.setFirstName("Ada");
    customer4.setLastName(null);

    List<Customer> customersError = new ArrayList();
    customersError.add(customer3);
    customersError.add(customer4);

    try {
      customerService.add(customersError);
      Assert.assertFalse( "Expected an exception to be thrown", false);
    } catch(DataIntegrityViolationException e) {
      System.out.println("Received an exception as expected.");
    }

    List<Customer> fetchedCustomers = customerService.get();
    Customer customer3Retrieved =
            findInList(fetchedCustomers, customer3.getFirstName(), customer3.getLastName());
    Assert.assertNull("Kathryn Janeway should have rolled back",
            customer3Retrieved);
  }

  private Customer findInList(List<Customer> customers, String first, String last) {
    // Find the new person in the list
    for (Customer customer : customers) {
      if (customer.getFirstName().equals(first) && customer.getLastName().equals(last)) {
        return customer;
      }
    }
    return null;
  }
}