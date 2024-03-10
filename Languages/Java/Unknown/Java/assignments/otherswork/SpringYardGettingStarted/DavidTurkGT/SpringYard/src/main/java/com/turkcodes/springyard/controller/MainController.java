package com.turkcodes.springyard.controller;

import com.turkcodes.springyard.model.Customer;
import com.turkcodes.springyard.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by David Turk on 8/4/17.
 */
@Controller
public class MainController {

    @Autowired
    CustomerService customerService;

    @RequestMapping("/")
    public String getHome(Model model){
        //Retrieve all Customers from the database
        List<Customer> customers = customerService.getAllCustomers();
        model.addAttribute("customers", customers);
        return "index";
    }

    @RequestMapping("/{id}")
    public String getCustomerPage(@PathVariable int id, Model model){
        Customer desiredCustomer = customerService.getCustomerById(id);
        System.out.println("You wish to look at this customer:");
        System.out.println(desiredCustomer);

        model.addAttribute("customer", desiredCustomer);
        return "customerpage";
    }

    @RequestMapping(value = "/add",method = RequestMethod.GET)
    public String getAddCustomerPage(){
        return "new";
    }

    @RequestMapping( path = "/add_customer", method = RequestMethod.POST)
    public String addNewCustomer(@RequestParam(value="firstname") String firstName,
                                 @RequestParam(value="lastname") String lastName,
                                 @RequestParam(value="phone") String phone,
                                 @RequestParam(value="email") String email,
                                 Model model){
        Customer newCustomer = new Customer();
        newCustomer.setFirstname(firstName);
        newCustomer.setLastname(lastName);
        newCustomer.setPhone(phone);
        newCustomer.setEmail(email);
        customerService.addCustomer(newCustomer);

        return "redirect:/";
    }
}
