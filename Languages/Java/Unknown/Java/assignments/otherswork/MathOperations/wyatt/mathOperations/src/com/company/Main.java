package com.company;
import java.util.Scanner;
public class Main {


    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);


        System.out.print("Enter first number: ");
        String operand1 = scanner.nextLine();


        System.out.print("Enter second number: ");
        String operand2 = scanner.nextLine();


        double a = Double.parseDouble(operand1);
        double b = Double.parseDouble(operand2);

        double sum = a + b;

        double differance = a - b;

        double division = a / b;

        double multiplication = a * b;

        double remainder = a % b;

        showResults(sum, differance, division, multiplication, remainder);

    }

    private static void showResults(double s, double d, double di, double m, double r) {
        System.out.print("The sum is: " + s + " The difference is: " + d + " The division equates to: " + di + " When multiplied the variables total to: " + m + " The remainder is: " + r);
    }
}


