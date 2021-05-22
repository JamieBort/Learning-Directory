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

package Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing;

import java.util.Arrays;

public class Arrays_Challenge_Exercise_100 {
    // int[] givenArray = {106, 26, 81, 5, 15};
    int pointer1;
    int pointer2;
    // int[] modifiedArray = new int[givenArray.length];

    public int[] sortArrayToDescendingOrder(int[] anotherArray) {
        int[] modifiedArray = new int[anotherArray.length];

        // // will need to cycle through so that next
        // modifiedArray[1]=myMax(anotherArray);
        // modifiedArray[0] = myMax(anotherArray); // should be 106 here

        // // now we reduce:
        // anotherArray=removeElementFromArray(anotherArray);

        // modifiedArray[1] = myMax(anotherArray); // should be 81 here

        int length = anotherArray.length;
        int tally = length;
        // while(length>1){
        while (tally - length) { // See https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.md#100-arrays-challenge-exercise for how to address this error.
            modifiedArray[tally - length] = myMax(anotherArray);
            anotherArray = removeElementFromArray(anotherArray);
            System.out.println("tally: " +tally + " & length: " + length);
            // length--;
        }

        System.out.println("The elements of the modifiedArray are:");
        for (int element : modifiedArray)
            System.out.println(element);
        return modifiedArray;
    }

    // this finds the highest integer
    public int myMax(int[] anArray) {
        System.out.println("The original:");
        for (int element : anArray) {
            System.out.println(element);
        }

        // the logic for finding the max of anArray[]
        int index;
        int max = anArray[0];
        // int max = 0;
        for (index = 1; index < anArray.length; index++) {
            if (anArray[index] > max) {
                max = anArray[index];
            }
        }

        // // removing the first entry (since it's the max) and reassigning it to the
        // same array
        // anArray = Arrays.copyOfRange(anArray, 1, anArray.length);
        // System.out.println("check here after:");
        // for (int element : anArray){
        // System.out.println(element);
        // }

        System.out.println("the max is: " + max);
        return max;
    }

    // removing the first entry (since it's the max) and reassigning it to the same
    // array
    public int[] removeElementFromArray(int[] someArray) {
        System.out.println("someArray before:");
        for (int element : someArray) {
            System.out.println(element);
        }

        someArray = Arrays.copyOfRange(someArray, 1, someArray.length);

        System.out.println("someArray here after:");
        for (int element : someArray) {
            System.out.println(element);
        }

        return someArray;
    }

}