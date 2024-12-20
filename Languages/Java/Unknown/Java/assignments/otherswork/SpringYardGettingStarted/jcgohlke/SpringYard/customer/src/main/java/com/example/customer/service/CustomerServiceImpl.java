package com.example.customer.service;

import com.example.customer.model.Customer;
import com.example.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService
{

  @Autowired
  CustomerRepository customerRepository;

  @Transactional
  @Override
  public void add(Customer customer)
  {
    customerRepository.add(customer);
  }

  @Transactional
  @Override
  public void add(List<Customer> customers)
  {
    for (Customer aCustomer : customers)
    {
      customerRepository.add(aCustomer);
    }
  }

  @Transactional
  @Override
  public Customer getById(int id)
  {
    return customerRepository.getById(id);
  }

  @Transactional
  @Override
  public List<Customer> get()
  {
    return customerRepository.get();
  }

  @Transactional
  @Override
  public void update(Customer customer)
  {
    customerRepository.update(customer);
  }

  @Transactional
  @Override
  public void delete(int id)
  {
    customerRepository.delete(id);
  }
}
