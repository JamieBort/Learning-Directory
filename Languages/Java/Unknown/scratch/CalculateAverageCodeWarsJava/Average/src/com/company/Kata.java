package com.company;

import java.util.Arrays;

public class Kata {
    public static double find_average(int[] array){

        return Arrays.stream(array).average().orElse(0);
    }
}