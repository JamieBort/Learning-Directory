package com.example.aggregate.controller;

import com.example.aggregate.domain.Address;
import com.example.aggregate.domain.Email;
import com.example.aggregate.domain.Person;
import com.example.aggregate.service.PersonService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    // Json to Java
    private ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Add person
     */
    @PostMapping("/api/person")
    public String addPerson(@RequestBody String json) throws IOException {
        Person person = objectMapper.readValue(json, Person.class);
        personService.add(person);

        return "ok";
    }

    /**
     * Update person
     */
    @PutMapping("/api/person/{id}")
    public String updatePerson(@PathVariable("id") Integer id, @RequestBody String json) throws IOException {
        Person person = objectMapper.readValue(json, Person.class);
        person.setId(id);
        personService.update(person);
        return "ok";
    }


    /**
     * Get a list of all the people. The person does not have references to
     * its associated address or emails
     */
    @GetMapping("/api/persons")
    public List<Person> getAll(Model model) {
        return personService.get();
    }

    /*
     * Calls the person service to get the person for the given id. The person returned has all its associations (address and emails).
     */
    @GetMapping("/api/person/{id}")
    public Person getPerson(@PathVariable("id") Integer id) {
        return personService.getById(id);
    }

    /**
     * Add an address
     */
    @PostMapping("/api/person/{id}/address")
    public String addAddress(@PathVariable("id") Integer id,
                             @RequestBody String json) throws IOException {
        Address address = objectMapper.readValue(json, Address.class);
        address.setPersonId(id);
        personService.addAddress(address);
        return "ok";
    }

    /**
     * Deletes the address from the person. The url has both ids.
     */
    @DeleteMapping("/api/person/{id}/address/{addressId}")
    public String deleteAddress(@PathVariable("id") Integer id,
                                @PathVariable("addressId") Integer addressId) {
        personService.deleteAddress(id, addressId);
        return "ok";
    }

    /**
     * Add an email
     */
    @PostMapping("/api/person/{id}/email")
    public String addEmail(@PathVariable("id") Integer id,
                           @RequestBody String json) throws IOException {
        Email email = objectMapper.readValue(json, Email.class);
        email.setPersonId(id);
        personService.addEmail(email);
        return "ok";
    }

    /**
     * Deletes the email from the person. The url has both ids.
     */
    @DeleteMapping("/api/person/{id}/email/{emailId}")
    public String deleteEmail(@PathVariable("id") Integer id,
                              @PathVariable("emailId") Integer emailId) {
        personService.deleteEmail(id, emailId);
        return "ok";
    }

    /*
     * Exception handler for this controller. Returns a 500 error with the message of the exception
     */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleAppException(Exception ex) {
        System.out.println("\n\n### " + ex);
        ex.printStackTrace();
        return ex.getMessage();
    }
}
