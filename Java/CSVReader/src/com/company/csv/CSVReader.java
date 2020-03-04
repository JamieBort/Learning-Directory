// from: https://www.mkyong.com/java/how-to-read-and-parse-csv-file-in-java/

package com.company.csv;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CSVReader {

    public static void main(String[] args) {

        String csvFile = "./MyData.csv";
        String line = "";
        String cvsSplitBy = ",";



        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            while ((line = br.readLine()) != null) {

                // use comma as separator
                String[] MyData = line.split(cvsSplitBy);

//                System.out.println("Country [code= " + country[4] + " , name=" + country[5] + "]");
                System.out.println(MyData[0]);


            }

        } catch (IOException e) {
            e.printStackTrace();
        }




    }

}
