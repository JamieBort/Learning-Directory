// From: https://stackoverflow.com/questions/14274259/read-csv-with-scanner

package com.company;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        ArrayList<String> str = new ArrayList<String>();
        ArrayList<Boolean> myInteger = new ArrayList<>();
        Scanner scanner = new Scanner(new File("./MyData.csv"));
        scanner.useDelimiter(",");

        while(scanner.hasNext()){
//            str.add("scanner.hasNext()");
            myInteger.add(scanner.hasNext());

//            System.out.print(scanner.next());
//            System.out.print(scanner.useDelimiter(",").next());
            System.out.println(myInteger);
        }
//                System.out.println(str);
//        System.out.println(myInteger);
        scanner.close();
    }

}