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

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
//        ArrayList<Integer> anArray = new ArrayList<>();
//        anArray.add(10);
//        anArray.add(20);
//        anArray.add(30);
//        sum(anArray);
//
//        ArrayList a = collectNumbers();
        sum();
    }

//    method ot collect numbers
    public static ArrayList<Integer> collectNumbers(){
////        this method is going to collect numbers from the user
////        add them to an array list
////        and then return that array list to sum()
        ArrayList<Integer> anArray = new ArrayList<>();
        int t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter 10 numbers.");
        while(t<10){
//            System.out.println("t is : " + t);
            anArray.add(sc.nextInt());
//            anArray.add(t);
//            System.out.println("the array list is: " + anArray);
            t++;
        }
        return anArray;
    }

//    method to sum numbers
    public static int sum(){

        ArrayList intArray = collectNumbers();
        System.out.println("the length of the arrayList is: " + intArray.size());
        int totalSum=0;
        if(intArray.size()<1){
            totalSum = 0;
        } else {
            for (int i = 0; i < intArray.size() ; i++) {
//                System.out.println("i inside the for loop: " + i);
//                System.out.println("total sum inside the for loop: " + totalSum);
//                System.out.println("the ith element inside the for loop: " + intArray.get(i));
                totalSum= totalSum + (int) intArray.get(i);
            }
        }
        System.out.println("the sum is: " + totalSum);
        return totalSum;
    }
}
