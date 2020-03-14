package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here

//        For this activity, you will be creating a small game that the user can play through the command line. Here is the basic flow:

//        Generate a random number 1 through 100 DONE.
//        Ask the user to guess the number. If their guess is higher, print "guess is too high" (or similar). Same for too low.
//        Let the user guess again until they guess the number. Then, print out a message saying how many total guesses they needed.
//        There are two easy ways to generate random numbers in Java: the Math class and the Random class. Search through the Java Documentation to find out how to use these classes, or experiment with them on your own. The Java Documentation is a valuable resource - refer to it whenever you are unsure about a class or method works.

//        double guessedNumber = 0;

        int tries = 0;

        double random = Math.floor((100 * Math.random()) + 1);
        System.out.println("The random number is: " + random);

        System.out.println("Please guess a number between 1 and 100, inclusive.");
        Scanner x = new Scanner(System.in);
        double guessedNumber = x.nextDouble();

        while (random != guessedNumber){
            tries++;

            if (random < guessedNumber){
                System.out.println("You guessed too high. Guess again.");
                Scanner y = new Scanner(System.in);
                guessedNumber = y.nextDouble();
            } else {
                System.out.println("You guessed too low. Guess again.");
                Scanner y = new Scanner(System.in);
                guessedNumber = y.nextDouble();
            }

        }
        System.out.println("Way to go! You guessed correctly!");
        System.out.println("It took you " + (tries + 1) + " to get the right answer." );
    }
}
