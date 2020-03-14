package com.company;


public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        int incremented = calc.increment(8);
        double summed = calc.sum(5, 7);
        double blargh = calc.sumOfProductAndQuotient(10, 5);

        System.out.println("8 incremented is " + incremented);
        System.out.println("5 plus 7 is " + summed);
        System.out.println("(10 * 5) + (10 / 5) is " + blargh);

    }
}