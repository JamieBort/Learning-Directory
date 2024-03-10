package com.company;

import java.util.HashMap;

import static com.company.MapProject.calcFibonacci;

public class Main {

    public static void main(String[] args) {
        // write your code here

        for (int i = 0; i < 5; i++) {
            System.out.println("calc(" + i + ") = " + calcFibonacci(i));
        }
    }
}

//Outside of the function you will need to:

// 1. Initialize the map.

// 2. Give the map starter values (i.e. the first two Fibonacci numbers). Hint:

//fibonacciNums.put(0, 0l);

//fibonacciNums.put(1, 1l);

//Notice the 'l' (the letter "ell"), which specifies that we want the long 0 value
