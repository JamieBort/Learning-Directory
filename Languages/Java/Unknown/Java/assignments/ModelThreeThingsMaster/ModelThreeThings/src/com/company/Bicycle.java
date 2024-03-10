package com.company;

public class Bicycle {
    int size;
    String type;
    boolean hasBasket;

    public Bicycle(int size, String type, boolean hasBasket) {
        this.size = size;
        this.type = type;
        this.hasBasket = hasBasket;
    }

    public void myOutput(){
        System.out.println(size + " " + type + " " + hasBasket);
//        System.out.printf()
    }

}
