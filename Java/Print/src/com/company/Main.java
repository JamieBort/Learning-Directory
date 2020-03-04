package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        myPrint(1,2,3);
    }

    public static double myPrint(int a, int b, int c) {
        int d = a + b + c;
        double e = d/3;
        System.out.print(e);
        return e;
    }
}
