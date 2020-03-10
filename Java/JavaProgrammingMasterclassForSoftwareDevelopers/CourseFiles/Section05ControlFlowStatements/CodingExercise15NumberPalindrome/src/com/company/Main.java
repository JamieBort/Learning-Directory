package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<Integer> numberArray = new ArrayList<Integer>();
//        isPalindrome(707);
        isPalindrome(11221, numberArray);

    }

//    public static boolean isPalindrome(int number){
        public static boolean isPalindrome(int number, ArrayList numberArray){
        boolean status = false;
        createNumberArray(number, numberArray);
        System.out.println(numberArray);

//        if(createNumberArray(number).get(0)==createNumberArray(number).get(createNumberArray(number).size()-1)){
        if(numberArray.get(0)==numberArray.get(numberArray.size()-1)){
            System.out.println("It is true");
            status=true;
        }
        System.out.println(status);
        return status;
    }

    public static ArrayList<Integer> createNumberArray(int number, ArrayList numberArray){
        System.out.println("the original number: " + number);
//        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        while (number>0){
            System.out.println(number%10);
            numberArray.add(number%10);
            number=(number-number%10)/10;
            System.out.println(number);
        }
        System.out.println("The Number Array is: " + numberArray);
        return numberArray;
    }


}
