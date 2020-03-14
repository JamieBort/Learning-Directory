package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

                for (int i = 0; i < 4; i++) {
                    System.out.println(noRecursionFactorial(i));
                }
            }
            public static int noRecursionFactorial (int n) {
                int out = 1;
                for (int i = 1; i <= n; i++) {
                    out *= i;
                }
                return out;
            }
        }