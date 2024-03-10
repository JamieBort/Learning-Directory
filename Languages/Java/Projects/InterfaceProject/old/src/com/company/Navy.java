package com.company;

public class Navy extends Soldier {

    //    Each class that extends the FootSoldier class will have to implement the method (e.g. Marines could return "oohrah", Army could return "Hooah", Navy could return "Hooyah", ...). All of the methods you're writing will work this way; you can think of them as sound effects (punch => "Blamo!" or whatever you pick).
    String speak() {
        String yell = "Hooyah!";
        return yell;
    }

    String shoot() {
        System.out.println("Blam!");
    }

    String punch() {
        System.out.println("wham!");
    }

    String bomb() {
        System.out.println("kabluie!!!");
    }
}