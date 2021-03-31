// package com.company;
package attempt01.src.com.company.com.company;

public class Main {


    public static void main(String[] args) {
        MarbleBag marbleBag = new MarbleBag(3, 2, 2);

        marbleBag.printInfo();

        marbleBag.numBlueMarbles = 5;

        if (marbleBag.getTotalNumberOfMarbles() == 9) {
            System.out.println("Total is 9, as expected");
        } else {
            System.out.println("PANIC!!!");
            throw new AssertionError(); //Crashes the program
        }

        marbleBag.removeAllGreenMarbles();

        if (marbleBag.getTotalNumberOfMarbles() == 8) {
            System.out.println("Total is 8, as expected");
        } else {
            System.out.println("Panic even more!!!");
            throw new AssertionError();
        }
    }
}



