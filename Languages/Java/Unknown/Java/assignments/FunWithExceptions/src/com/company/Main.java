package com.company;


public class Main {

    public static void main(String[] args) {
        // write your code here
        ExceptionRunner.divideInts();

//        ExceptionRunner.getSafeInt();


        try {
            ExceptionRunner.sumOfNumbers(new int []{2,2}, 4);
        } catch (Exception e) {
            System.out.println("That was a mistake. " + e.getMessage());
        }

        System.out.println("\n****\nI'm done!!!\n****\n");
    }
}
