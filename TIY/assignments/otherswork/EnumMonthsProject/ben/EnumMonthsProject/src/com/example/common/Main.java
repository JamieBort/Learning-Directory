package com.example.common;

import java.util.Scanner;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a month (ex. January): ");
        String month = input.nextLine().toUpperCase();

        Month MONTH = Month.valueOf(month);

        // Following Code provided by Oracle Java Docs about switch and modified to fit current usage
        ArrayList<String> futureMonths = new ArrayList<String>();

        switch (MONTH) {
            case JANUARY:  futureMonths.add("January");
            case FEBRUARY:  futureMonths.add("February");
            case MARCH:  futureMonths.add("March");
            case APRIL:  futureMonths.add("April");
            case MAY:  futureMonths.add("May");
            case JUNE:  futureMonths.add("June");
            case JULY:  futureMonths.add("July");
            case AUGUST:  futureMonths.add("August");
            case SEPTEMBER:  futureMonths.add("September");
            case OCTOBER: futureMonths.add("October");
            case NOVEMBER: futureMonths.add("November");
            case DECEMBER: futureMonths.add("December");
                break;
            default: break;
        }

        if (futureMonths.isEmpty()) {
            System.out.println("Invalid month number");
        } else {
            System.out.println("The month you selected was " + MONTH.getEnglishName());
            System.out.println("The rest of the months of the year are: ");
            for (String monthName : futureMonths) {
                System.out.println(monthName);
            }
        }

    }
}


//        In Main ask the user (using Scanner) to choose one of the months (show the month using the English name)
//
//        In an ArrayList add all the months for the given month and all the following months. This can be done many ways but an elegant solution can be coded using a switch statement.
//
//        Show the list to the user.
//
