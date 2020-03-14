package com.turkcodes.springyard.repository;

import com.turkcodes.springyard.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by David Turk on 8/3/17.
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
