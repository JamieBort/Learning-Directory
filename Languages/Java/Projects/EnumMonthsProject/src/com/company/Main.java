package com.company;

import java.util.Scanner;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        // write your code here

        //        In Main ask the user (using Scanner) to choose one of the months (show the month using the English name)
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a month (ex. January): ");
        String variableMonth = input.nextLine().toUpperCase();

        Month month = Month.valueOf(variableMonth);

        //        In an ArrayList add all the months for the given month and all the following months. This can be done many ways but an elegant solution can be coded using a switch statement.

        ArrayList<String> futureMonths = new ArrayList<String>();

        switch (month) {
            case JANUARY:
                futureMonths.add("January");
            case FEBRUARY:
                futureMonths.add("February");
            case MARCH:
                futureMonths.add("March");
            case APRIL:
                futureMonths.add("April");
            case MAY:
                futureMonths.add("May");
            case JUNE:
                futureMonths.add("June");
            case JULY:
                futureMonths.add("July");
            case AUGUST:
                futureMonths.add("August");
            case SEPTEMBER:
                futureMonths.add("September");
            case OCTOBER:
                futureMonths.add("October");
            case NOVEMBER:
                futureMonths.add("November");
            case DECEMBER:
                futureMonths.add("December");
                break;
            default:
                break;
        }

        //        Show the list to the user.
        if (futureMonths.isEmpty()) {
            System.out.println("That is not a month.");
        } else {
            System.out.println("The month you selected was " + month.getEnglishName());
            System.out.println("The rest of the months of the year are: ");
            for (String monthName : futureMonths) {
                System.out.println(monthName);
            }
        }

    }
}

//Assignment

//    We are going to put the Java enumeration is the common package.

//        Right click on the common package and then click New and then click Java Class.
//        Change the Kind to Enum and enter Month for the name and then click OK.
//        Enums in Java are typically singular (Month, not Months).

//        In the Month enum add the constants JANUARY through DECEMBER.

//        Also add a private variable englishName which should be set to January through December and a getter.

//        In Main ask the user (using Scanner) to choose one of the months (show the month using the English name)

//        In an ArrayList add all the months for the given month and all the following months. This can be done many ways but an elegant solution can be coded using a switch statement.

//        Show the list to the user.