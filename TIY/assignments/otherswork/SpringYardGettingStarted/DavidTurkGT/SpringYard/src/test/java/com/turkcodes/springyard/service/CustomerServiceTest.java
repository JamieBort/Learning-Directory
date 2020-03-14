package com.turkcodes.springyard.service;

import com.turkcodes.springyard.model.Customer;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Created by David Turk on 8/3/17.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerServiceTest {
    @Autowired
    CustomerService customerService;

    @Test
    public void testAddGet(){

        //Set up is to create and add a test customer and test that we can retrieve both with getAll and getById
        System.out.print("Adding test customer to database...");
        Customer expected = createTestCustomer();
        customerService.addCustomer(expected);
        System.out.println("Done!");

        //Test getAllCustomers()
        System.out.print("Getting all customers from the database...");
        List<Customer> customers = customerService.getAllCustomers();
        System.out.println("Done!");
        System.out.print("Gettting expected customer...");
        Customer receivedFromAll = findFirstInList(customers,expected);
        System.out.println("Done!");
        System.out.print("Testing getAllCustomers()....");
        Assert.assertNotNull(receivedFromAll);
        Assert.assertEquals(receivedFromAll.getFirstname(),expected.getFirstname());
        Assert.assertEquals(receivedFromAll.getLastname(),expected.getLastname());
        Assert.assertEquals(receivedFromAll.getPhone(),expected.getPhone());
        Assert.assertEquals(receivedFromAll.getEmail(),expected.getEmail());
        System.out.println("Passed!");

        //Test getCustomerById()
        System.out.println("Running ID test using the customer:");
        System.out.println("\t" + receivedFromAll);
        System.out.print("Getting customer by ID...");
        Customer receivedById = customerService.getCustomerById(receivedFromAll.getId());
        System.out.println("\tFound the following customer:");
        System.out.println("\t\t" + receivedById);
        System.out.println("Done!");
        System.out.print("Testing getCustomerById()....");
        Assert.assertNotNull(receivedById);
        Assert.assertEquals(receivedById.getFirstname(),receivedFromAll.getFirstname());
        Assert.assertEquals(receivedById.getLastname(),receivedFromAll.getLastname());
        Assert.assertEquals(receivedById.getPhone(),receivedFromAll.getPhone());
        Assert.assertEquals(receivedById.getEmail(),receivedFromAll.getEmail());
        System.out.println("Passed!");

    }

    @Test
    public void testUpdate(){
        Customer testCustomer = createTestCustomer();
        customerService.addCustomer(testCustomer);

        List<Customer> customers = customerService.getAllCustomers();
        Customer updatedCustomer = findFirstInList(customers,testCustomer);
        updatedCustomer.setFirstname("NewFirstName");
        updatedCustomer.setLastname("NewLastName");
        updatedCustomer.setPhone("NewPhone");
        updatedCustomer.setEmail("NewEmail");
        customerService.updateCustomer(updatedCustomer);

        Customer expected = customerService.getCustomerById(updatedCustomer.getId());
        Assert.assertNotNull(expected);
        Assert.assertEquals(expected.getFirstname(),updatedCustomer.getFirstname());
        Assert.assertEquals(expected.getLastname(),updatedCustomer.getLastname());
        Assert.assertEquals(expected.getPhone(),updatedCustomer.getPhone());
        Assert.assertEquals(expected.getEmail(),updatedCustomer.getEmail());

    }

    @Test
    public void testDelete(){
        Customer testCustomer = createTestCustomer();
        customerService.addCustomer(testCustomer);

        List<Customer> customers = customerService.getAllCustomers();
        Customer toBeDeleted = findFirstInList(customers,testCustomer);
        Assert.assertNotNull(toBeDeleted);

        customerService.deleteCustomer(toBeDeleted);

        customers = customerService.getAllCustomers();
        Customer expected = findFirstInList(customers,toBeDeleted);
        Assert.assertNull(expected);
    }

    private Customer createTestCustomer(){
        Customer testCustomer = new Customer();
        String firstname = Long.toString(System.currentTimeMillis());
        delay(1);
        String lastname = Long.toString(System.currentTimeMillis());
        delay(1);
        String phone = Long.toString(System.currentTimeMillis());
        delay(1 );
        String email = Long.toString(System.currentTimeMillis());

        testCustomer.setFirstname(firstname);
        testCustomer.setLastname(lastname);
        testCustomer.setPhone(phone);
        testCustomer.setEmail(email);

        return testCustomer;
    }

    private void delay(long seconds){
        try {
            Thread.sleep(seconds*1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     *
     * @param customers
     * @param instance
     * @return The first customer found in the list of customers that matches all parameters of instance is returned. If
     * no customer is
     * found, then null is returned
     */
    private Customer findFirstInList(List<Customer> customers, Customer instance){
        String firstname = instance.getFirstname();
        String lastname = instance.getLastname();
        String phone = instance.getPhone();
        String email = instance.getEmail();

        for(Customer customer : customers){
            if(
                    customer.getFirstname().equals(firstname) &&
                    customer.getLastname().equals(lastname) &&
                    customer.getPhone().equals(phone) &&
                    customer.getEmail().equals(email)
                ){
                return customer;
            }
        }
        return null;
    }
}
