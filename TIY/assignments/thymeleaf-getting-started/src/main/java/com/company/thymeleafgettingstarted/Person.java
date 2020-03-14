package com.company.thymeleafgettingstarted;

//package com.example.thymeleaf;

public class Person {
    private String name;
    private Contact contact;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", contact=" + contact +
                '}';
    }
}