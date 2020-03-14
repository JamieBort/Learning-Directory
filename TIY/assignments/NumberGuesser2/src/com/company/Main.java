package com.company;

// import scanner and random

import java.util.Random;

import java.util.Scanner;


public class Main {

    public static void main(String[] args) {
        // write your code here

//        define variables here


        Random rand = new Random();
        Scanner input = new Scanner(System.in);
        int guess;
        int numTries = 1;


//        we want a do/while loop?


//        Generate a random number 1 through 100. DONE.
//100 is the maximum and the 1 is our minimum
        int randomNumber = rand.nextInt(10) + 1;

        System.out.println(randomNumber);

//        Ask the user to guess the number. If their guess is higher, print "guess is too high" (or similar). Same for too low. Let the user guess again until they guess the number.

        System.out.print("Guess a number between 1 and 100. ");

        guess = input.nextInt();

        while (guess != randomNumber) {
            if (guess > randomNumber) {
                System.out.println("Your guess is too high. Try again. ");
                guess = input.nextInt();
            } else if (guess < randomNumber) {
                System.out.println("Your guess is too low. Try again. ");
                guess = input.nextInt();
            }
            numTries++;
        }
        System.out.println("Great Job. You won!");
        System.out.println("It took you " + numTries + " to win.");

//       Then, print out a message saying how many total guesses they needed.

    }
}



