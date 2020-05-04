package com.company;

public class SecondAttempt {

    private int i;
    private int s = 0;
    private int t = 0;

    public int getI() {

        for (i = 1; i < 101; i++) {
            System.out.println(i);
            s += i;
        }

        System.out.println(s);
        System.out.println("s * s is: " + s*s);

        for (i = 1; i < 101; i++) {
            System.out.println(i*i);
            t += i*i;
        }
        System.out.println("t is: " + t);

        System.out.println("(s * s) - t is: ");
        System.out.println((s*s) - t);

        //    The following is not needed.
        return (s*s) - t;
    }

//    The following is not needed.
    public void setI(int i) {
        this.i = i;
    }



}
