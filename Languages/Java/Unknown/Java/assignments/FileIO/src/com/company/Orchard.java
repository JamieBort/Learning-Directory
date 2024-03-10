package com.company;

public class Orchard {

    int firstVariable;
    boolean secondVariable;
    String thirdVariable;

    public Orchard(int firstVariable, boolean secondVariable, String thirdVariable) {
        this.firstVariable = firstVariable;
        this.secondVariable = secondVariable;
        this.thirdVariable = thirdVariable;
    }
//public static void myPrintFunction(int firstVariable, boolean secondVariable, String thirdVariable) {
//    System.out.printf("This is my frist time using System.out.printf: %s, %s, %s. ", firstVariable, secondVariable, thirdVariable);

    @Override
    public String toString() {
        return "The first variable is: " + firstVariable + "." + "\nThe second variable is: " + secondVariable + "." + "\nThe third variable is: " + thirdVariable + ".";
    }
}
