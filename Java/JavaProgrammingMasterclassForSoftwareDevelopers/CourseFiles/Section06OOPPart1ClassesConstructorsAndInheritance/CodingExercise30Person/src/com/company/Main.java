package com.company;

public class Main {

    public static void main(String[] args) {
        Person person = new Person();
        person.setFirstName("");
        person.setLastName("");
        person.setAge(10);
        System.out.println("full Name: " + person.getFullName());
        System.out.println("teen: " + person.isTeen());
        person.setFirstName("John");
        person.setAge(18);
        System.out.println("full Name: " + person.getFullName());
        System.out.println("teen: " + person.isTeen());
        person.setLastName("smith");
        System.out.println("full Name: " + person.getFullName());
    }
}
