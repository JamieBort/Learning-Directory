package com.company;

public class Kata {

     public static double find_average(int[] array){
//         System.out.println("hello");
//         take the three numbers, sum them, and divide by three.
//         System.out.println(array[0]);
//         System.out.println(array[1]);
//         System.out.println(array[2]);

         double sum = 0;
         double average;
//         for each element in the array, we need to add them up.
         for (int i = 0; i < array.length; i++)
         {
         System.out.println(array[i]);
             sum += array[i];
//             System.out.println("The sum is: " + sum);
         }

//         sum = array[0]+array[1]+array[2];
         average = sum/array.length;
         System.out.println("The sum is: " + sum);
//         System.out.println(sum);
         System.out.println(average);

         return average;
     }
    }



