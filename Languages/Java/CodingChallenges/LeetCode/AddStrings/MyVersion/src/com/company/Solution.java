// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

package com.company;

// import jdk.javadoc.internal.doclets.formats.html.SourceToHTMLConverter;

class Solution {
    public String addStrings(String num1, String num2) {
        // We know num1 = 12345 and num2 = 67890

        int length1 = num1.length();
        int length2 = num2.length();
        // int length1 = 7;
        // int length2 = 6;

        // which is longer?
        int maxLength = Math.max(length1,length2);
        // System.out.println(maxLength);

        int[] intarr1 = new int[length1];
        int[] intarr2 = new int[length2];
        int[] intarr3 = new int[maxLength];
        int[] intarr4 = new int[maxLength];   


        for (int index = 0; index < length1; index++) {
            // System.out.println("Hello");
            intarr4[index] = Character.getNumericValue(num1.charAt(index)) + Character.getNumericValue(num2.charAt(index));
        //     System.out.println(intarr4[index]);
        }


        System.out.println(intarr4[0]);
        System.out.println(intarr4[1]);
        System.out.println(intarr4[2]);
        System.out.println(intarr4[3]);
        System.out.println(intarr4[4]);

        // Checking for size/position
        if(intarr4[0]<10){
            System.out.println("The firset element is less than 10. It is: ");
            System.out.println(intarr4[0]);
        } else {
        System.out.println("The firset element is not less than 10. It is: ");
        System.out.println(intarr4[0]);
        }

        if(intarr4[1]<100){
            System.out.println("The firset element is less than 100. It is: ");
            System.out.println(intarr4[1]);
        } else {
            System.out.println("The firset element is not less than 100. It is: ");
            System.out.println(intarr4[1]);
        }

        
        if(intarr4[2]<1000){
            System.out.println("The firset element is less than 1000. It is: ");
            System.out.println(intarr4[2]);
        } else {
            System.out.println("The firset element is not less than 1000. It is: ");
            System.out.println(intarr4[2]);
        }


        String builtString = Integer.toString(intarr4[0])+intarr4[1]+intarr4[2]+intarr4[3]+intarr4[4];
        
        // System.out.println(builtString);

        return builtString;
    }
}