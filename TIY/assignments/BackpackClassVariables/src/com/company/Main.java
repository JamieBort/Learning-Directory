package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

//        Add a main() method to create at least two backpacks, add several items, and print out accurate counts of the total number of each tracked item.



        Backpack backpack1 = new Backpack();
        Backpack backpack2 = new Backpack();

        backpack1.addPen();
        backpack1.addPen();
        backpack1.addPen();
        backpack1.addPen();
        backpack1.addPen();
        backpack1.getPen();
        System.out.println(backpack1.getPen());
//        System.out.println(backpack1);
    }

}