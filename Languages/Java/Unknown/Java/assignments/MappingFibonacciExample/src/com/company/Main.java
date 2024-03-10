package com.company;

import static com.company.MapProject.calcFibonacci;

public class Main {

    public static void main(String[] args) {
        // write your code here

        double time1 = System.currentTimeMillis();

        System.out.println("Calculating first 40 fibonacci numbers took " + time1 + " milliseconds.");

        for (int i = 0; i < 43; i++) {
            System.out.println("calc(" + i + ") = " + calcFibonacci(i));
        }

        double time2 = System.currentTimeMillis();

        System.out.println("Calculating first 40 fibonacci numbers took " + time2 + " milliseconds.");
    }
}