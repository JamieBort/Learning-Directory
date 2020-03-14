package com.example.customer.controller;

import com.example.customer.model.Customer;
import com.example.customer.repository.CustomerRepositoryImpl;
import com.example.customer.service.CustomerService;
import com.example.customer.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Created by duhlig on 8/4/17.
 */
@Controller
public class CustomerController {
    @Autowired
    CustomerService customerRepo;

    @RequestMapping("/")
    public String getHome() {
        return "home";
    }

    @RequestMapping("/add-customer")
    public String addCustomer(){
        return "add-customer";
    }

    @RequestMapping("/create-customer")
    public String createCustomer(@RequestParam(value="first_name") String firstname, @RequestParam(value="last_name") String lastname, @RequestParam(value="phone") String phone, @RequestParam(value="email") String email, Model model) {
        Customer customer = new Customer();

        customer.setFirstname(firstname);
        customer.setLastname(lastname);
        customer.setPhone(phone);
        customer.setEmail(email);

        customerRepo.add(customer);
        return "redirect:/view-customers";
    }

    @RequestMapping("view-customers")
    public String viewCustomers(Model model) {
        List<Customer> allCustomers = customerRepo.get();
        model.addAttribute("allCustomers", allCustomers);
        return "view-customers";
    }

    @RequestMapping("/{id}")
    public String viewCustomer(@PathVariable int id, Model model) {
        Customer customer = customerRepo.getById(id);
        model.addAttribute("customer", customer);
        return "single-customer";

    }
}
