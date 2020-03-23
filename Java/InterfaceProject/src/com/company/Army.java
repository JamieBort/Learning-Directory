package com.company;

public class Army extends Soldier implements FightOnFoot, InPlane {

//    Each class that extends the FootSoldier class will have to implement the method (e.g. Marines could return "oohrah", Army could return "Hooah", Navy could return "Hooyah", ...). All of the methods you're writing will work this way; you can think of them as sound effects (punch => "Blamo!" or whatever you pick).

    public String speak(){
        System.out.println("Hello from the Army");
    return "Hooah";
    }

//    Of course you have to test your code.
//    Create a couple classes that extend Soldier and implement one or more interfaces.
//    When implementing methods return something appropriate for the method.

//    methods from FightOnFoot
    public String Punch(){
        System.out.println("blam!");
        return "noise";
    };

    public String Kick(){
        System.out.println("whack!");
        return "more noise";
    };

    //    methods from InPlane
    public String Bomb(){
        System.out.println("kaboom!");
        return "jiberish";
    };

    public String Shoot(){
        System.out.println("bang bang bang!");
        return "more jiberish";
    };

    @Override
    public void newDefaultMethod() {
        System.out.println("Time to read up more on this default method keyword.");
    }
}
