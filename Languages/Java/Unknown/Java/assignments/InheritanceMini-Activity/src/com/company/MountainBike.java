package com.company;

public class MountainBike extends Bicycle {

    boolean hasShocks;


    public MountainBike(int size, String type, boolean hasBasket, boolean hasShocks) {
        super(size, type, hasBasket);
        this.hasShocks = hasShocks;
    }
}
