package com.company;

public class Contacts {
    private String name;
    private String address;
    private String email;
    private String phone;

    public Contacts(String name, String address, String email, String phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    public String getName() {
        System.out.println("the name has been retrieved: " + name);
        return name;
    }

    public String getAddress() {
        System.out.println("the address has been retrieved: " + address);
        return address;
    }

    public String getEmail() {
        System.out.println("the email address has been retrieved: " + email);
        return email;
    }

    public String getPhone() {
        System.out.println("the phone number has been retrieved: " + phone);
        return phone;
    }

    public void setName(String name) {
        System.out.println("the name has been updated: " + name);
        this.name = name;
    }

    public void setAddress(String address) {
        System.out.println("the address has been updated: " + address);
        this.address = address;
    }

    public void setEmail(String email) {
        System.out.println("the email has been updated: " + email);
        this.email = email;
    }

    public void setPhone(String phone) {
        System.out.println("the phone has been updated: " + phone);
        this.phone = phone;
    }

    public void printContact(){
        System.out.println("Name\tAddress\tEmail\tPhone");
        System.out.println(name + "\t" + address + "\t" + email + "\t" + phone);
    }
}
