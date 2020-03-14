package com.ironyard;

public class Main {

    public static void main(String[] args) {
        ReversePolishCalc rpc = new ReversePolishCalc();

        String rpnExpression;
        double expectedResult;
        double actualResult;

        //Addition test
        rpnExpression = "2.5,4.8,+";
        expectedResult = 7.3;
        actualResult = rpc.calculate(rpnExpression);
        checkResult(rpnExpression, expectedResult, actualResult);

        //Subtraction test
        rpnExpression = "2,5,-";
        expectedResult = 3;
        actualResult = rpc.calculate(rpnExpression);
        checkResult(rpnExpression, expectedResult, actualResult);

        //Multiplication test
        rpnExpression = "5,2,*";
        expectedResult = 10;
        actualResult = rpc.calculate(rpnExpression);
        checkResult(rpnExpression, expectedResult, actualResult);

        //Division test
        rpnExpression = "5,10,/";
        expectedResult = 2;
        actualResult = rpc.calculate(rpnExpression);
        checkResult(rpnExpression, expectedResult, actualResult);

        // Many operators test
        rpnExpression = "5,1,2,+,4,*,+,3,-";
        expectedResult = -14.0;
        actualResult = rpc.calculate(rpnExpression);
        checkResult(rpnExpression, expectedResult, actualResult);
    }

    private static void checkResult(String expression, double expected, double actual) {
        if (expected == actual) {
            System.out.println("SUCCESS: " + expression + " is " + expected);
        } else {
            System.out.println("ERROR: " + expression + " expected " + expected + " actual " + actual);
        }

    }
}

