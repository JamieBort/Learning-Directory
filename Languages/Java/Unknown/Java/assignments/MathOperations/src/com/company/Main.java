package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here

// =============================
// Define variables
// =============================
        // Get the numbers as Strings using Scanner
        Scanner scanner = new Scanner(System.in); // from https://docs.oracle.com/javase/7/docs/api/java/util/Scanner.html

        // Ask the user to input two numbers
        System.out.println("Give me two numbers: ");
        String firstNumber = scanner.nextLine();
        String secondNumber = scanner.nextLine();

        // Convert a String to a double using Double.parseDouble. Save the first double value in an operand1 variable and the second double value in an operand2 variable: https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html#parseDouble-java.lang.String-
        double operand1 = Double.parseDouble(firstNumber);
        double operand2 = Double.parseDouble(secondNumber);

        // Add the operands and save in a sum variable
        double sum = operand1 + operand2;

        // Divide the operands and save in a division variable
        double quotient = operand1 / operand2;

        // Subtract the operands and save in a difference variable
        double difference = operand1 - operand2;

        // Multiple the operands and save in a multiplication variable
        double multiply = operand1 * operand2;

        //Find the remainder when one operand is divided by the other and save in a remainder variable. See this page if you need to learn more about the remainder operator: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html
        double remainder = operand1 % operand2;
// =============================
// =============================


// =============================
// calling a method
// =============================
        // Try some of the other Java operators which can be found at Operators: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html

        //Call a showResults method and pass the sum, difference, division, multiplication and remainder variables as arguments.
        showResults(sum, difference, quotient, multiply, remainder, operand1, operand2);

    }
    // =============================
    // =============================


    // =============================
    // A method
    // =============================
        public static void showResults ( double sum, double difference, double quotient, double multiply, double remainder, double operand1, double operand2){

        // In the showResults method output the parameters with some meaningful text (e.g. The sum is 10.5).
        System.out.println("The sum of the two numbers is " + sum + ".");
        System.out.println("The division of the two numbers is " + quotient + ".");
        System.out.println("The remainder is " + remainder + ".");
        System.out.println("The numberator is " + operand1 + ".");
        System.out.println("The divisor is " + operand2 + ".");
        System.out.println("The product of the two numbers is " + multiply + ".");
    }
    // =============================
    // =============================
}
