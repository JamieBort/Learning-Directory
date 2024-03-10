package com.company;

public abstract class Soldier {

//    Write a few common methods for the behavior (e.g. sleep, eat, walk) and just return a String for something meaning (e.g. "snore", "chew", "trudge").

    public void Snore(){
        System.out.println("snore.");
    }

    public void Chew(){
        System.out.println("chew.");
    }

    public void Trudge(){
        System.out.println("trudge.");
    }

    public abstract String speak();

}
