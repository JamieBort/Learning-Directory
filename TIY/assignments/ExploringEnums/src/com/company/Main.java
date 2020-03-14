package com.company;

public class Main {
    public static void main(String[] args) {

        DaysOfWeek first = DaysOfWeek.SUNDAY;
        DaysOfWeek second = DaysOfWeek.MONDAY;
        DaysOfWeek third = DaysOfWeek.TUESDAY;
        DaysOfWeek fourth = DaysOfWeek.WEDNESDAY;
        DaysOfWeek fifth = DaysOfWeek.THURSDAY;
        DaysOfWeek sixth = DaysOfWeek.FRIDAY;
        DaysOfWeek seventh = DaysOfWeek.SATURDAY;

        System.out.println(DaysOfWeek.TodayAsNumber(sixth));

        System.out.println(DaysOfWeek.TodayAsNumber(DaysOfWeek.SUNDAY));

    }
}