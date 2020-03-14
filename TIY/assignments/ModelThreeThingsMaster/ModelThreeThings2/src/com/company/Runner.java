package com.company;

public class Runner {

    public Runner() {

        Bicycle myBicycle = new Bicycle(34, "Huffy", true);

        Car myCar = new Car("Chevy", "Pinto", "Blue");

        Computer myComputer = new Computer("Mac", 2016, true);

//        Computer myComputer = new Computer();

        myBicycle.myOutput();

        myCar.myOutput();

        myComputer.myOutput1();

    }
}