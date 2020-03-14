package com.company;

public class Marines extends Soldier {

    //    Each class that extends the FootSoldier class will have to implement the method (e.g. Marines could return "oohrah", Army could return "Hooah", Navy could return "Hooyah", ...). All of the methods you're writing will work this way; you can think of them as sound effects (punch => "Blamo!" or whatever you pick).
    String speak() {
        String yell = "oohrah!";
        return yell;
    }

    //    implementing an interface:


    String void shoot() {
        System.out.println("Blam! Blam!");
    }

    String punch() {
        System.out.println("[nothing happens]");
    }

    String bomb() {
        System.out.println("kabluie!!! kabluie!!!");
    }
}