package com.example.customer.repository;

import com.example.customer.model.Customer;

import java.util.List;

public interface CustomerRepository {
    List<Customer> listAllCustomers();
    void createCustomer(Customer customer);
    public Customer findCustomer(int id);
//    List<Customer> findCustomer(String search);
    void updateCustomer(Customer customer);
    void deleteCustomer(int id);
//    void deleteCustomer(Customer customer);
}
