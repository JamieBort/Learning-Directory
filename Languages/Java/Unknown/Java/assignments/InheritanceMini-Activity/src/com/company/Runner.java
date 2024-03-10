package com.company;

import com.sun.tools.doclets.formats.html.SourceToHTMLConverter;

public class Runner {

    public Runner() {

//        Bicycle myBicycle = new Bicycle(34, "Huffy", true);



        Car myCar = new Car("Chevy", "Pinto", "Blue");

        Computer myComputer = new Computer("Mac", 2016, true);

        MountainBike myMtnBike = new MountainBike(2, "hello", false,true);

        RoadBike myRdBike = new RoadBike(7, "no", true, false);


//        Computer myComputer = new Computer();

//        myBicycle.myOutput();



        myCar.myOutput();

        myComputer.myOutput1();

        myMtnBike.myOutput();

        myRdBike.myOutput();
        
        System.out.println( myRdBike.myOutput());
    }
}