package com.company.thymeleafgettingstarted;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BasicController {

//Create an @Controller class and add a @RequestMapping("/") endpoint for the URL root.


    @RequestMapping("/")
    public String someMethod(Model model) {
        Person person = new Person();
        person.setName("Bob");
        Contact contact = new Contact();
        contact.setCell("9499227452");
        contact.setEmail("test@test.com");
        contact.setWebsite("http://www.example.com");
        person.setContact(contact);

        model.addAttribute("person", person.getName());
        model.addAttribute("contactEmail", contact.getEmail());
        model.addAttribute("contactCell", contact.getCell());
        model.addAttribute("contactWebsite", contact.getWebsite());

//In the endpoint add a method which returns a String. The String that is returned is the name of the thymeleaf HTML file to use (without the ".html" extension).
        return "test";
    }
}