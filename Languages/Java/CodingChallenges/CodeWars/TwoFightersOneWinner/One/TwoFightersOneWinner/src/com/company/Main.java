package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here
        Kata myFight = new Kata();

        Fighter Lew = new Fighter("Lew", 10, 2);
        Fighter Harry = new Fighter("Harry", 5, 4);
        Fighter Harald = new Fighter("Harald", 20, 5);
        Fighter Jerry = new Fighter("Jerry", 30, 3);

        myFight.declareWinner(Lew,Harry,"Lew");
//        myFight.declareWinner(Lew,Harry,"Harry");

    }
}
