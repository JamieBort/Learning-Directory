//-Read the numbers from the console entered by the user and print the minimum and maximum number the user has entered.
//        -Before the user enters the number, print the message Enter number:
//        -If the user enters an invalid number, break out of the loop and print the minimum and maximum number.
//
//        Hint:
//        -Use an endless while loop.
//
//        Bonus:
//        -Create a project with the name MinAndMaxInputChallenge.

package com.company;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        collectNumbers();
    }

    //    method to collect numbers
    public static ArrayList<Integer> collectNumbers(){
//        this method is going to collect numbers from the user
//        add them to an array list
//        and then return that array list.
        ArrayList<Integer> anArray = new ArrayList<>();
        int t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter 10 numbers.");
        while(t<10){
            anArray.add(sc.nextInt());
            t++;
        }
        return anArray;
    }

    //    method to sum numbers
//    public static int sum(){
//        ArrayList intArray = collectNumbers();
//        System.out.println("the length of the arrayList is: " + intArray.size());
//        int totalSum=0;
//        if(intArray.size()<1){
//            totalSum = 0;
//        } else {
//            for (int i = 0; i < intArray.size() ; i++) {
//                totalSum= totalSum + (int) intArray.get(i);
//            }
//        }
//        System.out.println("the sum is: " + totalSum);
//        return totalSum;
//    }
}
