package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        isPalindrome(707);

    }

    public static boolean isPalindrome(int number){
        boolean status = false;

        System.out.println("the original number: " + number);

        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        System.out.println(numberArray);
        numberArray.add(10);
        numberArray.add(0);
        numberArray.add(7);
        System.out.println(numberArray);


//        while (number>0){
//
//        }

        System.out.println(number%10);
        number=(number-number%10)/10;
        System.out.println(number);

//        System.out.println(number);
        System.out.println(number%10);
        number=(number-number%10)/10;
        System.out.println(number);

//        System.out.println(number);
        System.out.println(number%10);
        number=(number-number%10)/10;
        System.out.println("the last: " + number);

        if(true){
            status=true;
        }
        System.out.println(status);
        return status;
    }


}
