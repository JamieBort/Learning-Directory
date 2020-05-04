package com.company;

import java.util.Arrays;
import java.util.Collections;

public class myKata {
    public static int sum(int[] numbers) {
        if ((numbers == null) || (numbers.length < 2)) {
            return 0;
        } else {

//        ============= Finding the max and min values. =============

//        Integer[] num = { 2, 4, 7, 5, 9 };
//        The following lines of code are from: https://stackoverflow.com/questions/880581/how-to-convert-int-to-integer-in-java
// and: https://www.geeksforgeeks.org/find-max-min-value-array-primitives-using-java/
            Integer[] num = Arrays.stream(numbers).boxed().toArray(Integer[]::new);

            // using Collections.min() to find minimum element
            // using only 1 line.
            int min = Collections.min(Arrays.asList(num));

            // using Collections.max() to find maximum element
            // using only 1 line.
            int max = Collections.max(Arrays.asList(num));

            // printing minimum and maximum numbers
            System.out.println("Minimum number of array is : " + min);
            System.out.println("Maximum number of array is : " + max);

//        ============= Summing the rest of the values in the array. =============
            int sum = 0;
            for (int i = 0; i < numbers.length; i++) {
                if (min == numbers[i]) {
                    numbers[i] -= min;
                    min = 0;
                }
                if (max == numbers[i]) {
                    numbers[i] -= max;
                    max = 0;
                }
                sum += numbers[i];
            }
            System.out.println("The total sum of the remaining elements of the array is : " + sum);
            return sum;
        }
    }
}
