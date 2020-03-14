package com.company;

public class RecursionExample{
    public static void main( String[] args ){
        for (int i = 0; i < 10; i++) {
            System.out.println( factorial( i ) );
        }
    }
    public static int factorial( int n ){
        if( n == 0 ){
            return 1;
        }
        return factorial( n - 1 ) * n;
    }
}