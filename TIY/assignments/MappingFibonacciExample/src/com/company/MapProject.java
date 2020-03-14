package com.company;

public class MapProject {

    public static long calcFibonacci (int index) {
        if (index == 1) {
            return 1;
        }
        if (index == 0) {
            return 0;
        }
        return calcFibonacci(index - 1) + calcFibonacci(index - 2);
    }

    }
