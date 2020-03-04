package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Enter first number: ");
            int firstNumber = input.nextInt();
            System.out.println("The first number you entered was " + firstNumber + ".");

            System.out.println("Enter second number: ");
            int secondNumber = input.nextInt();
            System.out.println("The first number you entered was " + firstNumber + "." + "The second number you entered was " + secondNumber + ".");

            System.out.println("The first number divided by the second number is: " + firstNumber/secondNumber + ".");
        } catch (java.lang.ArithmeticException e) {
            System.out.println("I just caught an error.");
        }

//        Exception in thread "main" java.lang.ArithmeticException: / by zero
//        at com.company.Main.main(Main.java:20)

    }
}
