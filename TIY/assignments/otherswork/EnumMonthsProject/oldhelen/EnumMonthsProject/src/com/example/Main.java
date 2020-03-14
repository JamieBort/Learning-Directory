package com.example;

import com.common.Month;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

            Scanner scanner = new Scanner(System.in);

            System.out.println("Please enter a month: ");
            String myMonth = scanner.nextLine().toUpperCase();

            Month month = Month.valueOf(myMonth);

            ArrayList<String> futureMonths = new ArrayList<>();
            futureMonths.add(myMonth);

            switch (month) {
                case JANUARY: futureMonths.add("January");
                case FEBRUARY: futureMonths.add("February");
                case MARCH: futureMonths.add("March");
                case APRIL: futureMonths.add("April");
                case MAY: futureMonths.add("May");
                case JUNE: futureMonths.add("June");
                case JULY: futureMonths.add("July");
                case AUGUST: futureMonths.add("August");
                case SEPTEMBER: futureMonths.add("September");
                case OCTOBER: futureMonths.add("October");
                case NOVMEBER: futureMonths.add("November");
                case DECEMBER: futureMonths.add("December");

                System.out.println("this is your month: " + myMonth.toLowerCase());
        }

        if (futureMonths.isEmpty()) {
            System.out.println("Invalid month");
        } else {
                for (String monthName : futureMonths) {
                    System.out.println(monthName);
                }
        }
    }
}
