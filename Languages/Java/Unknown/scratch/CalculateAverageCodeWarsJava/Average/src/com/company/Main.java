package com.company;
import java.util.Arrays;

public class Main {

    private static void printArray(int[] anArray) {
        System.out.println(Arrays.toString(anArray));
    }

    static void numArray() {
        int[] testArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        printArray(testArray);
        // String[] array = new String[] {"John", "Mary", "Bob"};
        // System.out.println(Arrays.toString();
        // String[] array = new String[] {"John", "Mary", "Bob"};
        // System.out.println(array.toString());
        // int[] myArray = {1,5};
        // System.out.println(Arrays.toString(myArray));
    }

    static void primitives() {
        String str = new String("quick brown fox jumps over the lazy dog");
        System.out.println("The entire string.");
        System.out.println(str);
        System.out.println("Substring starting from index 15:");
        System.out.println(str.substring(15));
        System.out.println("Substring starting from index 15 and ending at 20:");
        System.out.println(str.substring(15, 20));
    }

    public static void main(String[] args) {
//         numArray();
        int[] testArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
//        printArray(testArray);
//        primitives();
//        averages(3,4,5);

//        new Kata();
        find_average(testArray);
        find_average2(testArray);
    }

//    create an array.
//    determine number of elements in the array.
//
    static void averages(int a, int b, int c) {
        System.out.println((a+b+c)/3);

//        System.out.println((3+4+5)/3);

    }

    public static double find_average(int[] array){
//        System.out.println(array);
        System.out.println(Arrays.stream(array).average().orElse(0));

        return Arrays.stream(array).average().orElse(0);
    }


        public static double find_average2(int[] array){
            double sum=0;
            double avg;
            for (int i=0;i<array.length;i++)
                sum+=array[i];

            avg=sum/array.length;
            System.out.println(avg);
            return avg;

        }







}

