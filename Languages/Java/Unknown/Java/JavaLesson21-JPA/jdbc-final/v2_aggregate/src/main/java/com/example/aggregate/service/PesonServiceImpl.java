package com.example.aggregate.service;

import com.example.aggregate.domain.Address;
import com.example.aggregate.domain.Email;
import com.example.aggregate.domain.Person;
import com.example.aggregate.respository.AddressRepository;
import com.example.aggregate.respository.EmailRepository;
import com.example.aggregate.respository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PesonServiceImpl implements PersonService {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    EmailRepository emailRepository;

    @Transactional
    @Override
    public void add(Person person) {
        personRepository.add(person);
    }

    @Transactional
    @Override
    public void add(List<Person> people) {
        for (Person person : people) {
            personRepository.add(person);
        }
    }

    @Override
    public Person getById(int id) {
        return getPerson(id);
    }

    @Override
    public List<Person> get() {
        return personRepository.get();
    }

    @Transactional
    @Override
    public void update(Person person) {
        personRepository.update(person);
    }

    @Transactional
    @Override
    public void delete(int id) {
        personRepository.delete(id);
    }

    @Override
    public Person addAddress(Address address) {
        addressRepository.add(address);
        return getPerson(address.getPersonId());
    }

    @Override
    public Person updateAddress(Address address) {
        addressRepository.update(address);
        return getPerson(address.getPersonId());
    }

    @Override
    public Person deleteAddress(int personId, int addressId) {
        addressRepository.delete(addressId);
        return getPerson(personId);
    }

    @Override
    public Person addEmail(Email email) {
        emailRepository.add(email);
        return getPerson(email.getPersonId());
    }

    @Override
    public Person deleteEmail(int personId, int emailId) {
        emailRepository.delete(emailId);
        return getPerson(personId);
    }

    private Person getPerson(int id) {
        Person person = personRepository.getById(id);
        person.setAddress(addressRepository.findByPersonId(person.getId()));
        person.getEmails().clear();
        person.getEmails().addAll(emailRepository.findByPersonId(id));
        System.out.println("\n\n getPerson " + person);
        return person;
    }

}
