package com.company;

public class Car {
    String make;
    String model;
    String color;

    public Car(String make, String model, String color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    public void myOutput(){
        System.out.println("The car class output: " + make + " " + model + " " + color);
//        System.out.printf()
    }

}
