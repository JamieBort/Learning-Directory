// // Mostly done.

// package com.company;

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.Scanner;

// public class Main {

//     public static void main(String[] args) {
//         inputThenPrintSumAndAverage();
//     }

//     public static void inputThenPrintSumAndAverage(){
//         prompt();
// //        System.out.println("SUM = XX AVG = YY");
//     }

// //    method prompts user for integer. outputs an ArrayList
// public static void prompt(){
//         try{
//             System.out.println("The prompt method was called.");
//             ArrayList<Integer> arrayList = new ArrayList<Integer>();
//             Scanner sc = new Scanner(System.in);
//             int t=0;
//             System.out.println("How many integers would you like to add to the arraylist?");
//             int count = sc.nextInt();
//             System.out.println("You chose to enter " + count + " integers to the arrayList.");
//             while(t<count){
//                 System.out.println("Enter an integer");
//                 int number = sc.nextInt();
//                 System.out.println("the integer you entered was: " + number);
//                 arrayList.add(number);
//                 t++;
//             }
//             System.out.println("The arraylist is now: " + arrayList);
//             sum(arrayList);
//             average(arrayList);

//         } catch (Exception e){
//         System.out.println("oops, there was an error: " + e);
//     }

// }

// //    method takes the same array list and outputs the average.
//     public static int average(ArrayList avgList){
// //        System.out.println("The average method was called: " + avgList);
//         int avg = sum(avgList)/avgList.size();
//         System.out.println("The average is: " + avg);
//         return avg;

//     }

//     //    method takes array list and sums each entry.
//     public static int sum(ArrayList sumList){
// //        System.out.println("The sum method was called: " + sumList);
//         int total = 0;
//         for (int i = 0; i < sumList.size(); i++) {
//             total+= (int) sumList.get(i);
//         }
//         System.out.println("The sum is: " + total);
//         return total;
//     }

// }

package Section05ControlFlowStatements;

import java.util.Scanner;

public class Coding_Exercise_27_Input_Calculator {
    public void inputThenPrintSumAndAverage() {
        int sum = 0;

        try {
            System.out.println("The prompt method was called.");
            Scanner sc1 = new Scanner(System.in);
            System.out.println("How many integers would you like to add to the arraylist?");
            int originalCount = sc1.nextInt();
            int talley = originalCount;
            System.out.println("count: " + talley);

            while (talley > 0) {
                System.out.println("What is the next integer?");
                Scanner sc2 = new Scanner(System.in);
                sum += sc2.nextInt();
                talley--;
            }
            int avg = sum / originalCount;
            System.out.println("The sum is: " + sum);
            System.out.println("The average is: " + avg);
            // System.out.println(11/4);
        } catch (Exception e) {
            System.out.println("oops, there was an error: " + e);

            System.out.println("SUM = XX AVG = YY");
        }
    }

}