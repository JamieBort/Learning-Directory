package com.company;

public class Main {

    public static void main(String[] args) {
//        In the main method of Main call the methods all the method of the Soldier class and the interface(s). Simply write to the console the Strings that are returned.

        Army NewInstanceOfArmy = new Army();
        Navy NewInstanceOfNavy = new Navy();

        NewInstanceOfArmy.Bomb();
        NewInstanceOfArmy.Kick();
        NewInstanceOfArmy.Punch();
        NewInstanceOfArmy.Shoot();
        NewInstanceOfArmy.speak();
//        Now call the method on a class that implements the interface.
        NewInstanceOfArmy.newDefaultMethod();

        NewInstanceOfNavy.Bomb();
        NewInstanceOfNavy.Kick();
        NewInstanceOfNavy.Punch();
        NewInstanceOfNavy.Shoot();
        NewInstanceOfNavy.speak();

    }
}