package com.company;

public class Navy extends Soldier implements FightOnFoot{

//    Each class that extends the FootSoldier class will have to implement the method (e.g. Marines could return "oohrah", Army could return "Hooah", Navy could return "Hooyah", ...). All of the methods you're writing will work this way; you can think of them as sound effects (punch => "Blamo!" or whatever you pick).

    public String speak(){
        System.out.println("Hello from the Navy");
        return "Hooyah";
    }

//    Of course you have to test your code.
//    Create a couple classes that extend Soldier and implement one or more interfaces.
//    When implementing methods return something appropriate for the method.

    public String Punch(){
        System.out.println("blam!");
        return "noise";
    };

    public String Kick(){
        System.out.println("whack!");
        return "more noise";
    };

//    I had intelliJ auto populate the following. So nothing will return.
    @Override
    public String Bomb() {
        return null;
    }

    @Override
    public String Shoot() {
        return null;
    }
}