package com.company.numberGuesser;
import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here


        Random rand = new Random();
        int numberToGuess = rand.nextInt(100);
        int numberOfTries = 0;
        Scanner input = new Scanner(System.in);
        int guess;
        boolean win = false;

        while (win == false) {

            System.out.println("Guess a number between 1 and 100: ");
            guess = input.nextInt();
            numberOfTries++;

            if (guess == numberToGuess) {
                win = true;
            }
            else if (guess < numberToGuess) {
            System.out.println("Your guess is too low");
            }
            else if (guess > numberToGuess) {
                System.out.println("Your guess is too high");
            }

        }

    System.out.println("You win!");
    System.out.println("The nubmer was " + numberToGuess);
    System.out.println("It took you " + numberOfTries + " tries");
    }
}
