package com.company;

public class Speeder {
//    public boolean isMoving;
//    boolean isBirthday;
//
//    public Speeder() {
//        this.isBirthday = isBirthday;
//        this.isMoving = isMoving;
//    }

    public static int caughtSpeeding (int speed, boolean isBirthday) {


        if ((speed < 61 && isBirthday == false )||(speed <= 65 && isBirthday == true ) ){
            return 0;
        } else if ((speed < 80 && isBirthday == false )||(speed <= 85 && isBirthday == true ) ) {
            return 1;
        } else {
            return 2;
        }

    }

}
