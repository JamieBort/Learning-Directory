//-Read 10 numbers from the console entered by the user and print the sum of those numbers.
//        -Create a Scanner like we did in the previous video.
//        -Use the hasNextInt() method from the scanner to check if the user has entered an int value.
//        -If hasNextInt() returns false, print the message ÅgInvalid NumberÅh. Continue reading until you have read 10 numbers.
//        -Use the nextInt() method to get the number and add it to the sum.
//        -Before the user enters each number, print the message ÅgEnter number #x:Åh where x represents the count, i.e. 1, 2, 3, 4, etc.
//        -For example, the first message printed to the user would be ÅgEnter number #1:Åh, the next ÅgEnter number #2: Åh, and so on.
//
//        Hint:
//        -Use a while loop.
//        -Use a counter variable for counting valid numbers.
//        -Close the scanner after you don't need it anymore.
//        -Create a project with the name ReadingUserInputChallenge.

package com.company;

public class Main {

    public static void main(String[] args) {
//        int[] anArray = {};
        int[] anArray = {1,2,3,4};
        sum(anArray);
    }

//    method ot collect numbers
    public static int[] collectNumbers(){
//        this method is going to collect numbers from the user
//        add them to an integer array
//        and then return that integer array to sum()
    }

//    method to sum numbers
    public static int sum(int[] intArray){
        int totalSum=0;
        if(intArray.length<1){
            totalSum = 0;
        } else {
            for (int i = 0; i < intArray.length ; i++) {
                totalSum+=intArray[i];
            }
        }
        System.out.println("the length of the array is: " + intArray.length);
        System.out.println("the sum is: " + totalSum);
        return totalSum;
    }
}
