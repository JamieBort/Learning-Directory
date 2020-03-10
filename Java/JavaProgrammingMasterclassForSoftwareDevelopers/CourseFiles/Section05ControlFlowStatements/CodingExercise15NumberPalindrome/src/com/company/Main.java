package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        isPalindrome(7017);
//        isPalindrome(123454321);
    }

    public static boolean isPalindrome(int number){
        boolean status = false;
        ArrayList<Integer> numberArray = createNumberArray(number);
        System.out.println("The numberArray ArrayList inside of the isPalindrom() method: " + numberArray);
        System.out.println("The size of the numberArray ArrayList is: " + numberArray.size());
        int nOI = numberOfIterations(numberArray);
        System.out.println("the number of iterations: " + nOI);
        int i = 0;
        while(nOI>0){
            status = compare(numberArray.get(0+i),numberArray.get(numberArray.size()-1-i));
            System.out.println("nOI is: " + nOI);
            i ++;
            System.out.println("i is: " + i);
            nOI -=1;
        }
        System.out.println("The status is: " + status);
        return status;
    }

    public static ArrayList<Integer> createNumberArray(int number){
        System.out.println("the original number: " + number);
        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        while (number>0){
//            System.out.println(number%10);
            numberArray.add(number%10);
            number=(number-number%10)/10;
//            System.out.println(number);
        }
        System.out.println("The Number Array is: " + numberArray);
        return numberArray;
    }

    public static boolean compare(int a, int b){
        boolean status = false;
        if(a==b){
            System.out.println(a + " and " + b + " are equal");
            status = true;
        }
        return status;
    }

    public static int numberOfIterations(ArrayList<Integer> aL){
        if(aL.size()%2==0){
            return aL.size()/2;
        } else {
            return (aL.size()-1)/2;
        }

    }

}
