package com.company;

import java.util.Random;
import java.util.Scanner;


public class Main {

    public static void main(String[] args) {
	// write your code here

        //50 is the maximum and the 1 is our minimum


        Random rand = new Random();

        int  n = rand.nextInt(50) + 1;



        // 1. Import Scanner


        public class Main {
            public static void main(String[] args) {

                // 2. The program prints out a prompt
                // Here the system is printing to the console
                System.out.println( "Please enter an integer between 1 and 100, inclusive." );

                // 3. An instance of `Scanner` is created to capture `System.in`
                // I'm creating a variable of type Scanner and naming it scanner
                Scanner scanner = new Scanner(System.in);

                // 4. The `Scanner` instance function `nextLine()`
                // is used to wait for user input.
                // userInput is a string that has the value of
                // the input from the command line. What happens here is
                // the program stops and waits for there to be input from the command line.
                // It will not continue running until it has received that input
                // and the user has pressed "return"
                String userInput = scanner.nextLine();

                // 5. `userInput` is concatenated with another string and printed to the console.
                // using concatenation, I combine a hard-coded String
                // with the userInput String and print to the command line
                System.out.println("It's nice to meet you, " + userInput);
            }
        }
    }
}






