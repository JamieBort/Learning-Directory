package com.theironyard.installparty;
import java.util.Scanner;
import java.util.Random;

public class Main {

    public static void main(String[] args) {
        Random rand = new Random();
        Scanner scanner = new Scanner(System.in);
        int num;
        int numTries = 0;
        int guess;
        boolean playAgain;
        //Logic and While Loop
        do {
            num = rand.nextInt(100);
            guess = 0;
            playAgain = false;
            System.out.println(num);

            while (guess != num) {
                System.out.println("Please enter an integer between 1 and 100 inclusive: ");
                guess = scanner.nextInt();
                numTries++;
                if (guess < 1 || guess > 100) {
                    System.out.println("Invalid input");
                } else if (guess < num) {
                    System.out.println("Your guess is too low!");
                } else if (guess > num) {
                    System.out.println("Your guess is too high!");
                }
            }

            System.out.println("Congratulations you won! Your numbers of tries was: " + numTries + " and the number was: " + num);
            System.out.println("Would you like to play again?");
            switch (scanner.next()) {
                case "yes":
                    playAgain = true;
                    break;
                default:
                    break;
            }
        } while (playAgain);
        System.out.println("Goodbye");
    }
}
