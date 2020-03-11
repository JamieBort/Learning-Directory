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
        ArrayList aL = collectNumbers();
        minNum(aL);
        maxNum(aL);
    }

    //    method to collect numbers
    public static ArrayList<Integer> collectNumbers(){
//        this method is going to collect numbers from the user
//        add them to an array list
//        and then return that array list.
        ArrayList<Integer> anArray = new ArrayList<>();
        int t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("How many integers would you like to enter?");
        int numberOfIntegers = sc.nextInt();
        System.out.println("You've chosen " + numberOfIntegers + " integers to enter.");
        while(t<numberOfIntegers){
            System.out.println("Please enter an integer.");
            anArray.add(sc.nextInt());
            t++;
        }
        System.out.println("The ArrayList is: " + anArray);
        return anArray;
    }

    //    method for finding the minimum number
    public static int minNum(ArrayList checkList){
        while(checkList.size()>2){
            System.out.println("Original list: " + checkList);
            System.out.println(Math.max((int) checkList.get(0), (int) checkList.get(1)));
            checkList.remove(checkList.indexOf(Math.max((int) checkList.get(0), (int) checkList.get(1))));
            System.out.println("One item removed from the list: " + checkList);
        }
        System.out.println("The minimum number in the array list is: " + Math.min((int) checkList.get(0), (int) checkList.get(1)));
        return Math.min((int) checkList.get(0), (int) checkList.get(1));
    }


    //    method for finding the minimum number
    public static int maxNum(ArrayList checkList){
        while(checkList.size()>2){
            System.out.println("Original list: " + checkList);
            System.out.println(Math.min((int) checkList.get(0), (int) checkList.get(1)));
            checkList.remove(checkList.indexOf(Math.min((int) checkList.get(0), (int) checkList.get(1))));
            System.out.println("One item removed from the list: " + checkList);
        }
        System.out.println("The maximum number in the array list is: " + Math.max((int) checkList.get(0), (int) checkList.get(1)));
        return Math.max((int) checkList.get(0), (int) checkList.get(1));
    }

}
