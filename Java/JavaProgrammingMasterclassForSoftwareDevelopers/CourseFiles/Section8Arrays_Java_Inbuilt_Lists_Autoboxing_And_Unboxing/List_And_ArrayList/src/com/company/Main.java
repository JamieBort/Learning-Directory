package com.company;
import java.util.ArrayList;
import java.util.Scanner;
public class Main {
    private static GroceryList groceryList = new GroceryList();
    private static  Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        printInstructions();
        int userInput= sc.nextInt();
        switch (userInput) {
            case 0:  printInstructions();
                break;
            case 1:  addItem();
                break;
            case 2:
                groceryList.printGroceryList();
                break;
            case 3:  modifyItem();
                break;
            case 4:  removeItem();
            break;
            case 5:  searchItem();
                break;
            default:
                System.out.println("need a default method and/or statement");
                break;
        }

    }

    public static void printInstructions(){
        System.out.println("Please enter a number corresponding to the action in the instructions you'd like to do.");
        System.out.println("the instructions are as follows:");
        System.out.println("0 to display the instructions again.");
        System.out.println("1 to add an item.");
        System.out.println("2 to display the entire list.");
        System.out.println("3 to modify an item.");
        System.out.println("4 to remove an item.");
        System.out.println("5 to search for an item.");
    }
    public static void addItem(){
//        System.out.println("an item was added");
        groceryList.addGroceryItem("this item");
    }
    public static void print(){
        System.out.println("unused method");
        groceryList.printGroceryList();
    }
    public static void modifyItem(){
        System.out.println("an item was modified");
    }
    public static void removeItem(){
        System.out.println("an item was removed");
        groceryList.removeGroceryItem();
    }
    public static void searchItem(){
        System.out.println("an item was searched for");
        groceryList.findItem();
    }




}
