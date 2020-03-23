package com.example.customer.service;

import com.example.customer.model.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> listAllCustomers();
    void createCustomer(Customer customer);
    Customer findCustomer(int id);
//    List<Customer> findCustomer(String find);
    void updateCustomer(Customer customer);
    void deleteCustomer(int id);
    //    void deleteCustomer(Customer customer);






    }
