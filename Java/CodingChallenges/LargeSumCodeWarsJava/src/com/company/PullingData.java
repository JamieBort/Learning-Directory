// From: https://stackoverflow.com/questions/14274259/read-csv-with-scanner

package com.company;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PullingData {

//    public static void main(String[] args) throws FileNotFoundException {
public static int FromAnotherPage() throws FileNotFoundException {

        Scanner scanner = new Scanner(new File("./MyData.csv"));
        scanner.useDelimiter(",");

            while(scanner.hasNext()){
                System.out.print(scanner.next());
            }
            scanner.close();
            return 0;

        }


}







//package com.company;

//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.FileReader;
//import java.util.Scanner;

//public class PullingData {
//    public static int FromAnotherPage() {
//
//        System.out.println("Hello");
//        String csvFile = "/MyData/MyData.csv";
//
//        System.out.println(csvFile);
//        return 0;
//    }
//}


