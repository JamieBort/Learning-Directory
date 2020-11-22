package com.company;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
//        sumFirstAndLastDigit(123);
//        sumFirstAndLastDigit(252);
//        sumFirstAndLastDigit(257);
        sumFirstAndLastDigit(0);
//        sumFirstAndLastDigit(5);
//        sumFirstAndLastDigit(-10);
    }

    public static int sumFirstAndLastDigit(int number){
        int sum = 0;
        if(number<0){
            sum = -1;
        } else if(number == 0) {
            sum = 0;
        }
        else {
            ArrayList<Integer> numberArray = createNumberArray(number);
            System.out.println("the size of the num array is: " + numberArray.size());
            System.out.println(numberArray.get(0) + numberArray.get(numberArray.size()-1));
            sum = numberArray.get(0) + numberArray.get(numberArray.size()-1);
        }
        System.out.println("the sum is: " + sum);
        return sum;
    }

    public static ArrayList<Integer> createNumberArray(int number){
        System.out.println("the original number: " + number);
        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        while (number>0){
            numberArray.add(number%10);
            number=(number-number%10)/10;
        }
        System.out.println("The Number Array is: " + numberArray);
        return numberArray;
    }

}
