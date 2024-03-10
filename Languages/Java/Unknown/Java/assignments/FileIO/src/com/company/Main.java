package com.company;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here

//        creating an instance of the Orchard object.
Orchard myOrchardInstance = new Orchard(1, true, "My text string");

// writing to a file
        try {
            File myFileInstance = new File("myTextFile3.txt");
            FileWriter myFileWriterInstance = new FileWriter(myFileInstance);
            myFileWriterInstance.write(myOrchardInstance.toString());
            System.out.println(myOrchardInstance.toString());
            myFileWriterInstance.close();
        } catch (IOException e) {
//            e.printStackTrace();
            System.out.println("Couldn't write to the file. Please handle this exception.");
        }

        // reading from a file
//        String[] fileContents = getFileContents("myTextFile3.txt");

//        for (String line : fileContents) {
//            System.out.println("What is this?" + line);
//        }
    }

    //Returns the contents of the given file as a String[] separated by lines
    //If it can't find the file it will return null after printing an error

    public static String[] getFileContents (String fileName) {
        File fileImReadingFrom = new File (fileName);
        try {
            Scanner myScannerInstance = new Scanner(fileImReadingFrom);
            List<String> fileContents = new ArrayList<>();
            while (myScannerInstance.hasNext()) {
                fileContents.add(myScannerInstance.nextLine());
            }
            return fileContents.toArray(new String[0]); //Converts the list to an array
        } //Since this time we are asking for data back from the file
        //We have to specify what to do if it isn't found
        catch (FileNotFoundException ex) {
            System.out.println("Could not find file " + fileName + ".");
            ex.printStackTrace();
            return null;
        }
    }
}