package com.example.customer.service;

import com.example.customer.model.Customer;
import com.example.customer.repository.CustomerRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Created by duhlig on 8/3/17.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerServiceTest {
    @Autowired
    CustomerRepository customerRepository;

    @Test
    public void testAddGet() {
        // Get unique names every time this test runs
        String firstName = Long.toString(System.currentTimeMillis());
        String lastName = Long.toString(System.currentTimeMillis());
        String phone = "404-404-4040";
        String email = "test@tes.com";

        Customer customer1 = new Customer();
        customer1.setFirstname(firstName);
        customer1.setLastname(lastName);
        customer1.setPhone(phone);
        customer1.setEmail(email);
        customerRepository.add(customer1);

        List<Customer> customers = customerRepository.get();

        Customer customer2 = findInList(customers, firstName, lastName, phone, email);
        Assert.assertNotNull(customer2);

        Customer customer3 = customerRepository.getById(customer2.getId());
        Assert.assertNotNull(customer3);
        Assert.assertEquals(firstName, customer3.getFirstname());
        Assert.assertEquals(lastName, customer3.getLastname());
        Assert.assertEquals(phone, customer3.getPhone());
        Assert.assertEquals(email, customer3.getEmail());
    }

    @Test
    public void testUpdate() {
        String firstName = " bret";
        String lastName = "rit";
        String phone = "222-722-2222";
        String email = "a8df@test.com";

        Customer customer1 = new Customer();

        customer1.setFirstname(firstName);
        customer1.setLastname(lastName);
        customer1.setPhone(phone);
        customer1.setEmail(email);
        customerRepository.add(customer1);

        List<Customer> customers = customerRepository.get();

        Customer customer2 = findInList(customers, customer1.getFirstname(), customer1.getLastname(), customer1.getPhone(), customer1.getEmail());
        Assert.assertNotNull(customer2);

        String updateFirstName = Long.toString(System.currentTimeMillis());;
        String updateLastName = Long.toString(System.currentTimeMillis());;
        String updatePhone = "111-111-1111";
        String updateEmail = "jeff@jeff.com";

        customer2.setFirstname(updateFirstName);
        customer2.setLastname(updateLastName);
        customer2.setPhone(updatePhone);
        customer2.setEmail(updateEmail);
        customerRepository.update(customer2);

        customers = customerRepository.get();

        Customer customer3 = findInList(customers, updateFirstName, updateLastName, updatePhone, updateEmail);
        Assert.assertNotNull(customer3);
        Assert.assertEquals(customer2.getId(), customer3.getId());
    }

    @Test
    public void testDelete() {
        String firstName = "steve";
        String lastName = "johnson";
        String phone = "333-333-3333";
        String email = "steve@steve.com";
        Customer customer1 = new Customer();

        customer1.setFirstname(firstName);
        customer1.setLastname(lastName);
        customer1.setPhone(phone);
        customer1.setEmail(email);

        customerRepository.add(customer1);

        List<Customer> customers = customerRepository.get();

        Customer customer2 = findInList(customers, customer1.getFirstname(), customer1.getLastname(), customer1.getPhone(), customer1.getEmail());
        Assert.assertNotNull(customer2);

        customerRepository.delete(customer2.getId());

        customers = customerRepository.get();
        Customer customer3 = findInList(customers, customer1.getFirstname(), customer1.getLastname(), customer1.getPhone(), customer1.getEmail());
        Assert.assertNull(customer3);
    }



    public static Customer findInList(List<Customer> customers, String first, String last, String phone, String email) {
        boolean found = false;
        for (Customer customer : customers) {
            if (customer.getFirstname().equals(first) && customer.getLastname().equals(last) && customer.getPhone().equals(phone) && customer.getEmail().equals(email)) {
                return customer;
            }
        }
        return null;
    }
}
