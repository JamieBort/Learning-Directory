// package com.company;

public class SecondJavaClass {

    private int mySecondNumber;
    private String mySecondName;

    public int getMySecondNumber() {
        System.out.println("hello again. my number is: " + mySecondNumber);
        return mySecondNumber;
    }

    public String getMySecondName() {
        return mySecondName;
    }

    public void setMySecondNumber(int myNewNumber) {
//        this.myNumber = myNumber;
        mySecondNumber = myNewNumber;
        System.out.println("hello. my number is: " + mySecondNumber);
    }

    public void setMySecondName(String myNewName) {
//        this.myName = myName;
        mySecondName = myNewName;
    }
}