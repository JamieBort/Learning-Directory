package com.company;

// Create a program using arrays that sorts a list of integers in descending order.
// Descending order is highest value to lowest.
// In other words if the array had the values in it 106, 26, 81, 5, 15 your program should
// ultimately have an array with 106,81,26, 15, 5 in it.
// Set up the program so that the numbers to sort are read in from the keyboard.
// Implement the following methods - getIntegers, printArray, and sortIntegers
// getIntegers returns an array of entered integers from keyboard
// printArray prints out the contents of the array
// and sortIntegers should sort the array and return a new array containing the sorted numbers
// you will have to figure out how to copy the array elements from the passed array into a new
// array and sort them and return the new sorted array.

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int[] testArray = getIntegers();
        printArray(testArray);
        sortIntegers(testArray);
    }


// Implement the following methods - getIntegers, printArray, and sortIntegers
    public static int[] getIntegers(){ // Set up the program so that the numbers to sort are read in from the keyboard.
        Scanner sc = new Scanner(System.in);
        int[] array = new int[5];
        System.out.println("This is the array: " + Arrays.toString(array));

        for (int i = 0; i <array.length ; i++) {
            System.out.println("Enter a number.");
            int integer = sc.nextInt();
            System.out.println("This is my number: " + integer);
            array[i]=integer;
        }
        System.out.println("This is the array inside of getIntegers(): " + Arrays.toString(array));
        return array;
    }

    public static void printArray(int[] theArrayToPrint){
        System.out.println("This is the array inside of printArray(): " + Arrays.toString(theArrayToPrint));
    }

    public static void sortIntegers(int[] theArrayToSort){
        System.out.println("The array to sort: " + Arrays.toString(theArrayToSort));
        int[] newArray = new int[theArrayToSort.length];

//        now to write sorting logic.
        System.out.println(theArrayToSort[0]);

        System.out.println("The new array to sort: " + Arrays.toString(newArray));

        if(theArrayToSort[0]>theArrayToSort[1]){
            System.out.println(theArrayToSort[0] + ">" + theArrayToSort[1]);
        }
    }

}
