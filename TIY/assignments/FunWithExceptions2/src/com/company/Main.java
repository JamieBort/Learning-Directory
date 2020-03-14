package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here

//        First method
//        divideInts();

//        Second method
//        getSafeInt();

// Third method.
        try {
            sumOfNumbers(new int []{2,2}, 4);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    //        For divideInts() your program should recover even if we try to divide by zero (hint: there is already an Exception in Java associated with this behavior). Print the exception.
    private static int divideInts() {
        System.out.println("Please enter a number. ");
        Scanner sc = new Scanner(System.in);
        int firstNumber = sc.nextInt();

        System.out.println("Please enter a second number. ");
        int secondNumber = sc.nextInt();

//        int v = firstNumber / secondNumber;
//        System.out.println(v);


        try {
            int v = firstNumber / secondNumber;
//            System.out.println(firstNumber/secondNumber);
            return v;
            //Code that throws a BlargException
        } catch (ArithmeticException ex) {
            System.out.println("An ArithmeticException was caught");
        }
        return firstNumber;
    }


    //    For getSafeInt() the method should always return an int. If the user enters something else, the function should call itself again.
    private static int getSafeInt() {

        System.out.println("Please enter a number. ");
        Scanner sc = new Scanner(System.in);
        int firstNumber = sc.nextInt();

        System.out.println("Please enter a second number. ");
        int secondNumber = sc.nextInt();


        try {
            int v2 = firstNumber / secondNumber;
            return v2;
        } catch (ArithmeticException ex) {
            System.out.println("An ArithmeticException was caught.");
            getSafeInt();
        }
        return firstNumber;
    }

//    For sumOfNumbers() the method should throw an exception with an explanatory String message up if the array is NOT of the length specified (note that it doesn't really make sense to pass in the length of an array since we can always find this out for ourselves). The exception thrown should be one that you define. Print the exception and its message.

public static int sumOfNumbers(int[] numbers, int length) throws Exception {

        if (numbers.length != length){
            throw new Exception("The length of the array is not correct.");

        } else {
            int total = 0;
            for (int num : numbers){
                total += num;
            }
            return total;
        }
}

}
