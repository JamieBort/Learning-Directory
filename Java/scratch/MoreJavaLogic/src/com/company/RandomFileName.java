package com.company;

import java.util.Arrays;

public class RandomFileName {
    public static void AnotherMethod() {
//        populate an array.
//        Sort that array.
//        Print out the elements in the odd positions.

        int[] array = new int[10];
        int[] array2 = new int[10];

        int i;
        for (i = 0; i < array.length; i++) {
            array[i] = i;


//        System.out.print("Hello World");
//        return 0;
        }
        System.out.println(Arrays.toString(array));

        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
//                System.out.println("hello " + i);
                array2[i/2]=array[i];
            }
            if (array[i] % 2 != 0) {
                System.out.println("hello " + i);
//                array2[5] = 1;
//                array2[6] = 3;
//                array2[7] = 5;
//                array2[8] = 7;
//                array2[9] = 9;

                int t;
                int j;
                int[] numArray = [4,3,2,1,0];
//                for (t = 4; t > -1; t--) {
                    for (j = 5; j < 10; j++) {
//                        System.out.println("j = " + j);
//                        System.out.println("t = " + t);
//                        array2[j] = array[j+t];



//                    array2[j] = array[1]; // i + 4 // 5 - 1 = 4 // j =
//                    array2[6] = array[3]; // i + 3 // 6 - 3 = 3
//                    array2[7] = array[5]; // i + 2 // 7 - 5 = 2
//                    array2[8] = array[7]; // i + 1 // 8 - 7 = 1
//                    array2[9] = array[9]; // i + 0 // 9 - 9 = 0

//                    array2[5] = array[1]; // i + 4
//                    array2[6] = array[3]; // i + 3
//                    array2[7] = array[5]; // i + 2
//                    array2[8] = array[7]; // i + 1
//                    array2[9] = array[9]; // i + 0

//                    }
                }
            }






//int t;
//        for (t = 4; t > -1; t--) {
//            System.out.println("When i = 1, we want 4. " + t);

//            System.out.println("When i = 3, we want 3. " + array.length);
//            System.out.println("When i = 5, we want 2. " + array.length);
//            System.out.println("When i = 7, we want 1. " + array.length);
//            System.out.println("When i = 9, we want 0. " + array.length);
        }
        System.out.println(Arrays.toString(array2));
    }

}