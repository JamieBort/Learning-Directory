package com.company;

public enum COINS {

//    Coin (value, weight in grams, name)
    PENNY(0.01, 3.5, com.company.NAME.PENNY ),
    NICKEL(0.05, 2.5, com.company.NAME.NICKEL),
    DIME(0.10, 4.0, com.company.NAME.DIME),
    QUARTER(0.25, 5.5, com.company.NAME.QUARTER);

    double value;
    double weight;
    NAME NAME;

    COINS(double value, double weight, NAME name) {
        this.value = value;
        this.weight = weight;
        this.NAME = name;
    }

    String dollarSign(){
        System.out.println("$" + value);
        return "$" + value;
    }

}
