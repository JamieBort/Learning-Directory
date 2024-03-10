package com.example.customer.service;

import com.example.customer.model.Customer;

import java.util.List;

public interface CustomerService
{
  void add(Customer customer);
  void add(List<Customer> customers);
  Customer getById(int id);
  List<Customer> get();
  void update(Customer customer);
  void delete(int id);
}
