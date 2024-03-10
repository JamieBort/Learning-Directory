// ************
//    when this is done can consider video 106 to be complete
// ************

package com.company;

import java.util.ArrayList;

public class GroceryList {
    private ArrayList<String> groceryList = new ArrayList<String>();

    public void addGroceryItem(String itemToAdd){
        groceryList.add(itemToAdd);
        System.out.println(itemToAdd + "... Was added");
    }

    public void printGroceryList(){
        System.out.println("You have " + groceryList.size() + " items in your grocery list");
        for (int i = 0; i < groceryList.size(); i++) {
            System.out.println((i+1) + ". " + groceryList.get(i));
        }
    }

    public void removeGroceryItem(int a){
        groceryList.remove(a);
        System.out.println(a + " was removed.");
    }

    // this one isn't done yet.
//    next search for the item by name (string) rather than by element (integer)
//    this way the modify and remove methods can use this method.
//    also, it helps make the grocery list class be self contained.
    public void findItem(){
        System.out.println("item found");
//        groceryList.indexOf("maybe this method will return something when an item is searched for");
        System.out.println(groceryList.indexOf(0));
        System.out.println(groceryList);
//        System.out.println(groceryList.indexOf("beesr")); // do not use this one.
//        System.out.println(groceryList.contains("beer")); // use this one.
    }

}
