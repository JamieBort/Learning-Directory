package com.turkcodes.springyard.service;

import com.turkcodes.springyard.model.Customer;
import com.turkcodes.springyard.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by David Turk on 8/3/17.
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Transactional
    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    @Override
    public Customer getCustomerById(int id) {
        return customerRepository.findOne(id);
    }

    @Transactional
    @Override
    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Transactional
    @Override
    public void deleteCustomer(Customer customer) {
        customerRepository.delete(customer);
    }
}
