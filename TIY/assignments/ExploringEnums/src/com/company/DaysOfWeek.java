package com.company;

public enum DaysOfWeek {


    //Days_of_the_week ( precipitation in inches, humidity %, cloud cover);

    SUNDAY(3, 6, "sunny"),
    MONDAY(4, 10, "overcast"),
    TUESDAY(2, 33, "cloudy"),
    WEDNESDAY(3, 12, "sunny"),
    THURSDAY(0, 22, "overcast"),
    FRIDAY(0, 7, "sunnny"),
    SATURDAY(32, 78, "cloudy");

    private int precipitation;
    private int humidity;
    private String cloudCover;
//    private [data type for day]

//    constructor
    DaysOfWeek(int precipitation, int humidity, String cloudCover) {
        this.precipitation = precipitation;
        this.humidity = humidity;
        this.cloudCover = cloudCover;
    }

    //  public static int TodayAsNumber((Type of argument) argument)
    public static int TodayAsNumber(DaysOfWeek Today) {
        return Today.ordinal();
    }

//    if today is Monday then we want this to return Tuesday.
    public static String Tomorrow (DaysOfWeek TheNextDay) {
        return null;
    }
//    return precipitation of Tuesday

}

