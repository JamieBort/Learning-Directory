package com.example.customer.controller;

import com.example.customer.model.Customer;
import com.example.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CustomerController {


    @Autowired
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping("/")
    public String getHome(Model model) {
        model.addAttribute("customers", customerService.listAllCustomers());
        return "all-customers";
    }

//    @GetMapping("/")
//    public String listAllCustomers(Model model) {
//        model.addAttribute("customers", customerService.listAllCustomers());
//        return "all-customers";
//    }

    @GetMapping("/")
//    public String findCustomer(Model model,  int id) {
    public String findCustomer(Model model, @RequestParam(defaultValue = " ") int id) {
//    public String findCustomer(Model model, @RequestParam(defaultValue = "") String find) {
        model.addAttribute("customers", customerService.findCustomer(id));
//        model.addAttribute("customers", customerService.findCustomer(find));
        model.addAttribute("id", id);
//        model.addAttribute("find", find);
        return "all-customers";
    }

    @GetMapping("/createCustomerForm")
    public String createCustomerForm(){
        return "createCustomerForm";
    }

    @PostMapping("/create-customer")
    public String createCustomer(Customer customer){
        customerService.createCustomer(customer);
        return "redirect:/";
    }

    @GetMapping("/updateCustomerForm")
    public String updateCustomerForm(){
        return "updateCustomerForm";
    }

    @PostMapping("/update-customer")
    public String updateCustomer(Customer customer){
        customerService.updateCustomer(customer);
        return "redirect:/";
    }

    @GetMapping("/deleteCustomerForm")
    public String deleteCustomerForm(){
        return "deleteCustomerForm";
    }

    @PostMapping("/delete-customer")
    public String deleteCustomer(int id){
//    public String deleteCustomer(Customer customer){
        customerService.deleteCustomer(id);
//        customerService.deleteCustomer(customer);
        return "redirect:/";
    }


}
