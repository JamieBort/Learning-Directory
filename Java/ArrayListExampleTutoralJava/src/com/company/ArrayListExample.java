package com.company;
import java.util.ArrayList;


public class ArrayListExample {
    public static void main(String[] args) { // The tutorial has "public static void main(String args[]) {".
        // write your code here
        ArrayList<String> obj = new ArrayList<String>(); // String elements are going to be added so the arraylist is of string type.

//        Now to add elements (to the end of the list):
        obj.add("Jamie");
        obj.add("Bill");
        obj.add("Jim");
        obj.add("John");
        obj.add("Becky");
        obj.add("Samantha");

        /* Displaying array list elements */
        System.out.println("Currently the array list has following elements:"+obj);

        // Add element at a given index. This "advances" the elements forward:
        obj.add(0,"Jose");
        obj.add(1,"Stephanie");

        System.out.println("Currently the array list again has following elements:"+obj);

        obj.add("John"); // Adds it to the end of the list.

        System.out.println("Currently the array list (3rd time) has following elements:"+obj);

//        Now to remove some names.
        obj.remove("Jamie");

        System.out.println("Currently the array list (4th time) has following elements:"+obj);

        obj.remove("John"); // Removes the first instance of it.

        System.out.println("Currently the array list (5th time) has following elements:"+obj);

        obj.remove(3); // Removes an element from a given index.

        System.out.println("Currently the array list (6th time) has following elements:"+obj);
    }
}
