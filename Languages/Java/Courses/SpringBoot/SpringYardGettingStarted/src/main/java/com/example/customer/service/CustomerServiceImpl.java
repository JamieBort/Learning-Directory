package com.example.customer.service;

import com.example.customer.model.Customer;
import com.example.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {


    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Transactional
    @Override
    public List<Customer> listAllCustomers() {
        return customerRepository.listAllCustomers();
    }

    @Transactional
    @Override
    public void createCustomer(Customer customer) {
        customerRepository.createCustomer(customer);
    }

    @Transactional
    @Override
    public Customer findCustomer(int id) {
        return customerRepository.findCustomer(id);
    }
//    public List<Customer> findCustomer(String find) {
//        return customerRepository.findCustomer(find);
//    }

    @Transactional
    @Override
    public void updateCustomer(Customer customer) {
        customerRepository.updateCustomer(customer);
    }

    @Transactional
    @Override
    public void deleteCustomer(int id) {
        customerRepository.deleteCustomer(id);
    }
//    public void deleteCustomer(Customer customer) {
//        customerRepository.deleteCustomer(customer);
//    }
}
