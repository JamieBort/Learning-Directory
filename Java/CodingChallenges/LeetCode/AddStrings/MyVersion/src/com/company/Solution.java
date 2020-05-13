// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

package com.company;

class Solution {
    public String addStrings(String num1, String num2) {
        int length1 = num1.length();
        // System.out.println(length1);
        int length2 = num2.length();
        // System.out.println(length2);    

        System.out.println(Character.getNumericValue(num1.charAt(0)));
        System.out.println(Character.getNumericValue(num2.charAt(0)));
        System.out.println(Character.getNumericValue(num1.charAt(0))+Character.getNumericValue(num1.charAt(0)));
        // +Character.getNumericValue(3);

        // for (int i = 0; i < length1; i++) {
        //     System.out.println(Character.getNumericValue(num1.charAt(i)));
        // }
        // int number1 = Character.getNumericValue(num1.charAt(2));
        // System.out.println("number1");
        // System.out.println(number1);

    int inum1 = Integer.parseInt(num1);
    int inum2 = Integer.parseInt(num2);
    int sum = inum1+inum2;
    // System.out.println("Result is: "+sum);
	// System.out.println("check: ");
    // System.out.println(12345+67890);
    String Sum = String.valueOf(sum);
	// System.out.println("check2: ");
    // System.out.println(Sum);
    return Sum;
    }
}