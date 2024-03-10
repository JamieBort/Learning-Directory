package com.company;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionRunner {

    public static int divideInts() {
//        For divideInts() your program should recover even if we try to divide by zero (hint: there is already an Exception in Java associated with this behavior). Print the exception.

        System.out.println("Please enter a number.");
        Scanner sc = new Scanner(System.in);
        int firstNumber = sc.nextInt();

        System.out.println("Please enter a second number.");
        int secondNumber = sc.nextInt();

        try {
            double c = firstNumber / secondNumber;
            System.out.println("The first number divided by the second number is :" + firstNumber / secondNumber);

        } catch (InputMismatchException e) {
            System.out.println("Sorry, you cannot divid by zero");

        } finally {
            System.out.println("Finally, we're done!");
        }
        return firstNumber / secondNumber;

    }

    public static int getSafeInt() {
        System.out.println("enter an integer");


        try {
            return Integer.parseInt(new Scanner(System.in).nextLine());

        } catch (NumberFormatException e) {
            System.out.println("that was not an integer");
            return getSafeInt();
        }


    }


    public static int sumOfNumbers(int[] numbers, int length) throws Exception {
//        For sumOfNumbers() the method should throw an exception with an explanatory String message up if the array is NOT of the length specified (note that it doesn't really make sense to pass in the length of an array since we can always find this out for ourselves). The exception thrown should be one that you define. Print the exception and its message.

        if (numbers.length != length) {
            throw new Exception("The length of the array given does not match.");
        } else {

            int total = 0;
            for (int num : numbers) {
                total += num;
            }
            return total;
        }
    }
}
