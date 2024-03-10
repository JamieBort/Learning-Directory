package com.company.ReversePolishCalc;

/**
 * Test Driven Development (TDD)
 * Write your tests first and watch them fail.
 * Then write the algorithm and watch the tests pass.
 */
public class Main {
    public static void main(String[] args) {
        ReversePolishCalc rpc = new ReversePolishCalc();

//        First test
        String rpnExpression = "2.5,4.8,+";
        double expectedResult = 7.3;
        double actualResult = rpc.calculate(rpnExpression);
        checkResult("First Test:     " + rpnExpression, expectedResult, actualResult);

        // Write tests for the other operators (-, *, /)

        rpnExpression = "2.5,5,/";
        expectedResult = 2;
        actualResult = rpc.calculate(rpnExpression);
        checkResult("Second Test:     " + rpnExpression, expectedResult, actualResult);

        rpnExpression = "2.0,64.0,/";
        expectedResult = 32.0;
        actualResult = rpc.calculate(rpnExpression);
        checkResult("Third Test:     " + rpnExpression, expectedResult, actualResult);

        // Uncomment this test which has many operators
        rpnExpression = "2,5,-";
        expectedResult = 3.0;
        actualResult = rpc.calculate(rpnExpression);
        checkResult("Fourth Test:     " + rpnExpression, expectedResult, actualResult);

    }

    private static void checkResult(String expression, double expected, double actual) {
        if (expected == actual) {
            System.out.println("SUCCESS: " + expression + " is " + expected);
        } else {
            System.out.println("ERROR: " + expression + " expected " + expected + " actual " + actual);
        }
    }
}
