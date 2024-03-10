package com.example.aggregate.service;

import com.example.aggregate.domain.Address;
import com.example.aggregate.domain.Email;
import com.example.aggregate.domain.Person;

import java.util.List;

public interface PersonService {
    void add(Person person);
    void add(List<Person> people);
    Person getById(int id);
    List<Person> get();
    void update(Person person);
    void delete(int id);

    Person addAddress(Address address);
    Person updateAddress(Address address);
    Person deleteAddress(int personId, int addressId);

    Person addEmail(Email email);
    Person deleteEmail(int personId, int emailId);

}
