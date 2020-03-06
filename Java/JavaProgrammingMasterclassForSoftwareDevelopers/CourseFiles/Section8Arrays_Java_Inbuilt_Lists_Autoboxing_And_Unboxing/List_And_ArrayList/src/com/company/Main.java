// ************
//    when this is done can consider video 106 to be complete
// ************

package com.company;
import java.util.ArrayList; // this can be removed
import java.util.Scanner;
public class Main {
    private static GroceryList groceryList = new GroceryList();
    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        printInstructions();
        boolean quit = true;
        while (quit) {
            int userInput = sc.nextInt();
            switch (userInput) {
                case 0:
                    printInstructions();
                    break;
                case 1:
                    printList();
                    break;
                case 2:
                    addItem();
                    break;
                case 3:
                    modifyItem();
                    break;
                case 4:
                    removeItem();
                    break;
                case 5:
                    searchItem();
                    break;
                case 6:
                    quit = false;
                    break;
                default:
                    System.out.println("need a default method and/or statement");
                    break;
            }
        }
    }

    public static void printInstructions() {
        System.out.println("Please enter a number corresponding to the action in the instructions you'd like to do.");
        System.out.println("0 to display the instructions again.");
        System.out.println("1 to display the entire list.");
        System.out.println("2 to add an item.");
        System.out.println("3 to modify an item.");
        System.out.println("4 to remove an item.");
        System.out.println("5 to search for an item.");
        System.out.println("6 to quit.");
    }

    public static void printList() {
        groceryList.printGroceryList();
        System.out.println("********");
        printInstructions();
    }

    public static void addItem() {
        System.out.println("Please type out the item you would like to add to the grocery list.");
        String newItem = sc.next();
        System.out.println(newItem  + " was added!!!");
        groceryList.addGroceryItem(newItem);
        System.out.println("********");
        printInstructions();
    }

    // this one isn't done yet.
    public static void modifyItem() {
        System.out.println("an item was modified");
        System.out.println("********");
        printInstructions();
    }

    public static void removeItem() {
        System.out.println("Please type the number corresponding to the item you'd like to remove from the grocery list.");
        int itemToRemove=sc.nextInt();
        groceryList.removeGroceryItem(itemToRemove-1);
        System.out.println("********");
        printInstructions();
    }

    // this one isn't done yet.
//    next search for the item by name (string) rather than by element (integer)
//    this way the modify and remove methods can use this method.
//    also, it helps make the grocery list class be self contained.
    public static void searchItem() {
        System.out.println("an item was searched for");
        groceryList.findItem();
        System.out.println("********");
        printInstructions();
    }


}
