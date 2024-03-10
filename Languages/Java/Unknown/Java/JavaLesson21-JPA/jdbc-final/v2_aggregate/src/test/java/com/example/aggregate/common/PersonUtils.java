package com.example.aggregate.common;

import com.example.aggregate.domain.Address;
import com.example.aggregate.domain.Email;
import com.example.aggregate.domain.Person;

import java.util.List;
import java.util.Random;

/**
 * Created by gilpratte on 7/31/17.
 */
public class PersonUtils {

    private static Random random = new Random();

    public static Person createTestPerson() {
        // Get unique names every time this test runs
        String firstName = Long.toString(System.currentTimeMillis());
        String lastName = Long.toString(System.currentTimeMillis());

        Person person = new Person();
        person.setFirstName(firstName);
        person.setLastName(lastName);
        return person;
    }


    public static Person findInList(List<Person> people, String first, String last) {
        // Find the new person in the list
        boolean found = false;
        for (Person person : people) {
            if (person.getFirstName().equals(first) && person.getLastName().equals(last)) {
                return person;
            }
        }
        return null;
    }

    public static Address createRandomAddress() {
        Address address = new Address();
        address.setStreet(Integer.toString(random.nextInt()));
        address.setCity(Integer.toString(random.nextInt()));
        address.setState("TX");
        address.setZip("12345");
        return address;
    }

    public static Email createRandomEmail() {
        Email email = new Email();
        email.setEmail(Integer.toString(random.nextInt()));
        return email;
    }
}
