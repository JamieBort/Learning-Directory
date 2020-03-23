package com.company;

//        In the Month enum add the constants JANUARY through DECEMBER.
//        Also add a private variable englishName which should be set to January through December and a getter.
public enum Month {
    JANUARY("January"),
    FEBRUARY("February"),
    MARCH("March"),
    APRIL("April"),
    MAY("May"),
    JUNE("June"),
    JULY("July"),
    AUGUST("August"),
    SEPTEMBER("September"),
    OCTOBER("October"),
    NOVEMBER("November"),
    DECEMBER("December");

    private String englishName;

    Month(String name) {
        this.englishName = name;
    }

    public String getEnglishName() {
        return englishName;
    }
}