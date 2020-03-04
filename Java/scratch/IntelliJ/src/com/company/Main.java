package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here
        //        create a function that takes two integers and adds them together.
        int aa, bb;
//        int d;
        aa= 4;
        bb=9;
        add(aa,bb);
        multiply(aa, bb);
//        System.out.println(d);

    }

//    /usr/local/bin/idea

     public static void add(int a, int b){
        int c;
         c = a+b;
//         System.out.println(c);
//         return c;
     }

    public static int multiply(int a, int b){
//        int d;
        d = a*b;
        System.out.println(d);
        return d;
    }
}