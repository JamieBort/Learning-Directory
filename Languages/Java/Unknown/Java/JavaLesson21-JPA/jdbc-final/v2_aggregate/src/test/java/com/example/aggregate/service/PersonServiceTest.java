package com.example.aggregate.service;

import com.example.aggregate.common.PersonUtils;
import com.example.aggregate.domain.Address;
import com.example.aggregate.domain.Email;
import com.example.aggregate.domain.Person;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static com.example.aggregate.common.PersonUtils.createTestPerson;
import static com.example.aggregate.common.PersonUtils.findInList;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PersonServiceTest {

    @Autowired
    PersonService personService;

    @Test
    public void testTransactional() {
        Person person1 = createTestPerson();
        Person person2 = createTestPerson();
        List<Person> people = new ArrayList<>();
        people.add(person1);
        people.add(person2);

        // Cause an error
        person2.setFirstName(null);
        try {
            personService.add(people);
        } catch(Exception e) {
            // expected this
        }

        people = personService.get();
        Person person3 = findInList(people, person1.getFirstName(), person1.getLastName());
        Assert.assertNull("The first person created should have rolled back", person3);
    }

    @Test
    public void testEverything() {
        Person person = PersonUtils.createTestPerson();
        personService.add(person);
        List<Person> persons = personService.get();

        // Check that it is in the list
        Assert.assertNotNull(persons);
        Assert.assertTrue(persons.size() > 0);
        Person person1 = null;
        for (Person p : persons) {
            if (p.equals(person)) {
                person1 = p;
                break;
            }
        }
        Assert.assertNotNull("Could not find " + person, person1);

        Person person2 = personService.getById(person1.getId());
        Assert.assertEquals(person, person2);

        // Add an address
        Address address = PersonUtils.createRandomAddress();
        address.setPersonId(person1.getId());
        Person person3 = personService.addAddress(address);
        Assert.assertEquals(address, person3.getAddress());

        // Add email
        Email email1 = PersonUtils.createRandomEmail();
        email1.setPersonId(person1.getId());
        personService.addEmail(email1);
        Email email2 = PersonUtils.createRandomEmail();
        email2.setPersonId(person1.getId());
        Person person4 = personService.addEmail(email2);

        // Check that it is in the list
        Assert.assertNotNull(person4.getEmails());
        Assert.assertTrue(person4.getEmails().size() > 1);
        boolean found = false;
        for (Email e : person4.getEmails()) {
            if (e.equals(email1)) {
                found = true;
                break;
            }
        }
        Assert.assertTrue("Could not find " + email1, found);

        found = false;
        for (Email e : person4.getEmails()) {
            if (e.equals(email2)) {
                found = true;
                break;
            }
        }
        Assert.assertTrue("Could not find " + email2, found);
    }
}
