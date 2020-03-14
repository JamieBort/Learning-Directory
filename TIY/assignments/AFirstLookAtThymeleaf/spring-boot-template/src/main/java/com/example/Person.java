package com.example;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Person {
    private String name;
    private boolean soldier;
    private LocalDate dob;
    private List<String> nicknames;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public boolean isSoldier() {
        return soldier;
    }
    public void setSoldier(boolean soldier) {
        this.soldier = soldier;
    }
    public LocalDate getDob() {
        return dob;
    }
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }
    public List<String> getNicknames() {
        return nicknames;
    }
    public void setNicknames(List<String> nicknames) {
        this.nicknames = nicknames;
    }

    @RequestMapping("/")
    public String hello(Model model) {
        model.addAttribute("name", "John Doe");

        Person person = new Person();
        person.setName("Ricardo");
        person.setDob(LocalDate.now());
        person.setSoldier(true);
        List<String> nicknames = new ArrayList<>();
        nicknames.add("Enforcer");
        nicknames.add("King Fish");
        person.setNicknames(nicknames);
        model.addAttribute("person", person);

        return "hello";
    }




}
