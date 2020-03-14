package com.ironyard;

public class Main {

    public static void main(String[] args) {

        // create new instances of Army and Marines
        Soldier officer  = new Army("bob", "officer", 2 );
        Soldier captain = new Marines("bill", "captain", 3);

        officer.eat();
        officer.gun();
        officer.kick();
        officer.knife();
        captain.punch();
        captain.sleep();
        captain.speak();
        captain.walk();
        captain.Bomb();
        officer.hammer();
    }
}
