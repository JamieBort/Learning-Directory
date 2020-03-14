package com.company;

public class Computer {
    String make;
    int year;
    boolean isOn;

    public Computer(String make, int year, boolean isOn) {
        this.make = make;
        this.year = year;
        this.isOn = isOn;
    }

    public void myOutput1(){
        System.out.println(make + " " + year + " " + isOn);
//        System.out.printf()
    }


}
