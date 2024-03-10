package com.example.customer.service;

import com.example.customer.model.Customer;

import java.util.List;

/**
 * Created by duhlig on 8/3/17.
 */
public interface CustomerService {
    void add(Customer customer);
    Customer getById(int id);
    List<Customer> get();
    void update(Customer customer);
    void delete(int id);
}
