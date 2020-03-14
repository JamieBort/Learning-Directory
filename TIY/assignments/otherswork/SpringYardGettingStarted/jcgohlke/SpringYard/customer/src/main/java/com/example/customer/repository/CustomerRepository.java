package com.example.customer.repository;

import com.example.customer.model.Customer;

import java.util.List;

public interface CustomerRepository
{
  void add(Customer customer);
  Customer getById(int id);
  List<Customer> get();
  void update(Customer customer);
  void delete(int id);
}
