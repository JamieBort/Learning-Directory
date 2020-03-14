package com.company;

public class Bicycle {
    int size;
    String type;
    boolean hasBasket;


//    Bicycle is extended by two other classes. Therefore the constructor below cannot be used. It needs a default construcor.

    public Bicycle(int size, String type, boolean hasBasket) {
        this.size = size;
        this.type = type;
        this.hasBasket = hasBasket;
    }

    public String myOutput(){
        System.out.println(size + " " + type + " " + hasBasket);
//        System.out.printf()
        return "you";
    }

}
