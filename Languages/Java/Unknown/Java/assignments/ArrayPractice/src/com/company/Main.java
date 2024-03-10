package com.company;



import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        // write your code here


//    First Question

        //Returns the number of numbers that are divisible by "divisibility"
//Example 1: nums = 1, 2, 3, 5, 6, 7; divisibility = 2; => 2 (2 and 6 are divisible by 2)
//Example 2: nums = 8, 19, 27, 54, 31, 81; divisibility = 9; => 3

//        int[] nums1 = {1, 2, 3, 5, 6, 7};
        int[] nums2 = {8, 19, 27, 54, 31, 81};

        countMults(nums1, 2);
        countMults(nums2, 9);


//        second question

        hasThreeNonAdjacentThrees(nums3, 3);


//    int[] firstArray1 = new int[] {1,2,3,5,6,7};
    }
//    First Question


    static int[] nums1 = {1, 2, 3, 5, 6, 7};
//    int[] nums2 = {8, 19, 27, 54, 31, 81};


    public static void countMults(int[] nums, int divisibility) {
        System.out.println(Arrays.toString(nums));
        for (int num : nums
                ) {
            if (num % divisibility == 0) {
                System.out.println("A number in the array that is divisible by " + divisibility + " is " + num + ".");
            }
        }
    }

    //    Second Question


    static int[] nums3 = {3, 1, 3, 1, 3};
    int[] nums4 = {3, 1, 3, 1};
    int[] nums5 = {3, 1, 3, 3};


// Second Question
// Returns true if the array contains three non-adjacent threes and no adjacent 3s
// Returns false if it detects any adjacent 3s
// Example 1: nums = 3, 1, 3, 1, 3; => true
// Example 2: nums = 3, 1, 3, 1; => false
// Example 3: nums = 3, 1, 3, 3; => false

//     public static boolean contains(int[] arr, int item) {
//      for (int n : arr) {
//        if (item == n) {
//            return true;


    public static boolean hasThreeNonAdjacentThrees(int[] nums, int item) {

//        for (int n : nums) {
            if (nums.binary) {
                System.out.println("what is this? " + item);
                //        if ( Arrays.asList(nums).contains(3)
//
//                {
                System.out.println("there exists a 3");
            } else {
                System.out.println("there does not exist a 3");
            }
//            return false;



        return false;
    }
}

