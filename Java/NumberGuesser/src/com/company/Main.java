//        For this activity, you will be creating a small game that the user can play through the command line. Here is the basic flow:

//        Generate a random number 1 through 100 DONE.
//        Ask the user to guess the number. If their guess is higher, print "guess is too high" (or similar). Same for too low.
//        Let the user guess again until they guess the number. Then, print out a message saying how many total guesses they needed.
//        There are two easy ways to generate random numbers in Java: the Math class and the Random class. Search through the Java Documentation to find out how to use these classes, or experiment with them on your own. The Java Documentation is a valuable resource - refer to it whenever you are unsure about a class or method works.

//        double guessedNumber = 0;

package com.company;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int tries = 0;

        double random = Math.floor((100 * Math.random()) + 1);
//        System.out.println("The random number is: " + random);

        Scanner sc = new Scanner(System.in);
        System.out.println("Please guess a number between 1 and 100.");
        System.out.println("Please enter that number.");
        int myGuess = sc.nextInt();
//        System.out.println("The number you've guess is: " + myGuess);

        while(myGuess != random){
//            System.out.println(myGuess + " and " + random + " don't match.");
            System.out.println("Please enter that number.");
            myGuess = sc.nextInt();
            System.out.println("The number you've guess is: " + myGuess);
        }
        System.out.println(myGuess + " and " + random + " match!");

    }
}
