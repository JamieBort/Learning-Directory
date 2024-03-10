package com.company;

public class Calculator {
    public double sum(double number, double anotherNumber){
        return number + anotherNumber;
    }

    public int increment(int x){
        return x + 1;
    }

    public double sumOfProductAndQuotient(double x, double y){
        double product = x * y;
        double quotient = x / y;

        return product + quotient;
    }
}
