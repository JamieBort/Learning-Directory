package com.company;

public abstract class Soldier implements Fight, Plane {

//    Write an abstract Soldier class with a few instance variables (e.g. name, rank, serialNumber).
    String name;
    String rank;
    int age;

    //    Write an abstract method speak which returns a String.
    abstract String speak();


//    Write a few common methods for the behavior (e.g. sleep, eat, walk) and just return a String for something meaning (e.g. "snore", "chew", "trudge").
    public String sleep(){
        String snore = "snore";
//        System.out.println(snore);
        return snore;
    }

    public String eat(){
        String chew = "chew";
//        System.out.println(chew);
        return chew;
    }
    public String walk(){
        String trudge = "trudge";
        System.out.println(trudge);
        return trudge;
    }


    String shoot() {
        System.out.println("Blam! Blam!");
    }

    String punch() {
        System.out.println("[nothing happens]");
    }




}