package com.company;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        printInstructions();
        System.out.println("Please enter a number corresponding to the action in the instructions you'd like to do.");
        int userInput= sc.nextInt();
        switch (userInput) {
            case 0:  printInstructions();
                break;
            case 1:  addItem();
                break;
            case 2:  modifyItem();
                break;
            case 3:  removeItem();
                break;
            case 4:  searchItem();
                break;
            default:
                System.out.println("need a default method and/or statement");
                break;
        }

    }

    public static void printInstructions(){
        System.out.println("the instructions are as follows:");
        System.out.println("0 To Do first thing.");
        System.out.println("1 To Do first thing.");
        System.out.println("2 To Do first thing.");
        System.out.println("3 To Do first thing.");
        System.out.println("4 To Do first thing.");
        System.out.println("5 To Do first thing.");
        System.out.println("6 To Do first thing.");
    }
    public static void addItem(){
        System.out.println("an item was added");
    }
    public static void modifyItem(){
        System.out.println("an item was modified");
    }
    public static void removeItem(){
        System.out.println("an item was removed");
    }
    public static void searchItem(){
        System.out.println("an item was searched for");
    }




}
