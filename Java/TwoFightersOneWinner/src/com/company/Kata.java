package com.company;

public class Kata {
    public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
        // Your code goes here. Have fun!
        System.out.println("The first attacker,  Fighter1, is: " + firstAttacker);
        System.out.println("The second attacker, Fighter2, is: " + fighter2.name);

//     for new Fighter("Lew", 10, 2),new Fighter("Harry", 5, 4), "Lew"));


        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter2.health -= fighter1.damagePerAttack;
            fighter1.health -= fighter2.damagePerAttack;
        }

        if (fighter2.health < 1) {
            System.out.println(fighter1.name + " won.");
        } else {
            System.out.println(fighter2.name + " won.");
        }
        System.out.println("Fighter1 health: " + fighter1.health);
        System.out.println("Fighter2 health: " + fighter2.health);


        return "Lew";
    }
}