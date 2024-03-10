package com.theironyard.installparty;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter two numbers please: ");

        String num1 = scanner.nextLine();
        String num2 = scanner.nextLine();

        double operand1 = Double.parseDouble(num1);
        double operand2 = Double.parseDouble(num2);


        double sum = operand1 + operand2;

        double difference = operand1 - operand2;

        double devide = operand1 / operand2;

        double multiply = operand1 * operand2;

        double remainder = operand1 % operand2;

        showResults(sum, difference, devide, multiply, remainder);

    }


    public static void showResults(double sum, double difference, double devide, double multiply, double remainder) {
        System.out.println("the sum is: " + sum);
        System.out.println("the difference is: " + difference);
        System.out.println("the devided result is: " + devide);
        System.out.println("the product is: " + multiply);
        System.out.println("the remainder is: " + remainder);
    }

}
