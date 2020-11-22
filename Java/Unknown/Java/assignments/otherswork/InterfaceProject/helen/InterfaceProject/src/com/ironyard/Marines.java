package com.ironyard;

public class Marines extends Soldier {

    public Marines(String name, String rank, int serialNumber) {
        super(name, rank, serialNumber);
    }

    public void speak() {
        System.out.println("Wooo!");
    }
}
