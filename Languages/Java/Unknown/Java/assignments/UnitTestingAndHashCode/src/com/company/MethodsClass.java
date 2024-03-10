package com.company;

public class MethodsClass {
    public static boolean containsOne(int n) throws BadInputException {
        //We'll write the function after we've written our unit tests
        //This is TDD: Test Driven Development.



        if (n < 0) {
            throw new BadInputException();
        }
        String numString = "" + n; //Convert the number to a string
        return numString.contains("1"); //Check to see if it contains 1




//        if (n % 10 == 1) {
//            return true;
//        }
//        String numString = "" + n; //Convert the number to a string
//        return numString.contains("1"); //Check to see if it contains 1
//        return false;
//    }


    }
}