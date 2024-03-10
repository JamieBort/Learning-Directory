package com.company;

public class RoadBike extends Bicycle {

    boolean hasShocks;


    public RoadBike(int size, String type, boolean hasBasket, boolean hasShocks) {
        super(size, type, hasBasket);
        this.hasShocks = hasShocks;
    }


//Override the printInfo() method from the superclass. Call super.printInfo(), then print out the additional variables you added to the subclass

//        public void printInfo(){
//            System.out.println("The Roadbike class output");
//        }

@Override
public String myOutput(){
//        System.out.println("my overrride");
        return "hello" + super.myOutput();
    }
}
