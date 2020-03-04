// Also, working on this in conjuction with the file 'LargeSum'

package com.company;

//public class Main {
//
//    public static void main(String[] args) {
//	// write your code here
//    }
//}


// Java program to find large factorials using BigInteger
import java.math.BigInteger;
        import java.util.Scanner;

public class Main
{
    // Returns Factorial of N
    static BigInteger factorial(int N)
    {


        BigInteger a = new BigInteger("37107287533902102798797998220837590246510135740250");
        BigInteger b = new BigInteger("46376937677490009712648124896970078050417018260538");
        BigInteger result = new BigInteger("37107287533902102798797998220837590246510135740250").add(new BigInteger("46376937677490009712648124896970078050417018260538"));
        System.out.println(result);

        BigInteger result2 = a.add(b);
        System.out.println(result2);

        // Initialize result
        BigInteger f = new BigInteger("1"); // Or BigInteger.ONE
//        System.out.println(f);
//        f.add(0135740250));
//        System.out.println(f);
//        System.out.println(37107287533902102798797998220837590246510135740250+46376937677490009712648124896970078050417018260538+74324986199524741059474233309513058123726617309629+91942213363574161572522430563301811072406154908250+23067588207539346171171980310421047513778063246676+89261670696623633820136378418383684178734361726757+28112879812849979408065481931592621691275889832738+44274228917432520321923589422876796487670272189318+47451445736001306439091167216856844588711603153276+70386486105843025439939619828917593665686757934951);

        // Multiply f with 2, 3, ...N
        for (int i = 2; i <= N; i++)
            f = f.multiply(BigInteger.valueOf(i));
//
        return f;
    }
//
    // Driver method
    public static void main(String args[]) throws Exception
    {
        int N = 20;
        System.out.println(factorial(N));
    }
}