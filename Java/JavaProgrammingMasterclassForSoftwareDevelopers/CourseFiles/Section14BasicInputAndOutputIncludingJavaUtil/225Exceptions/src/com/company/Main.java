package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        getIntLookBeforeYouLeap();
    }

    // method that prompts the user for an integer and returns an integer.
    private static int getIntLookBeforeYouLeap(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter an integer:");
//        int myInt = sc.nextInt();
        String input = sc.next();
        System.out.println(input);
        System.out.println(input.getClass().getName());
        return 0;
    }
}
