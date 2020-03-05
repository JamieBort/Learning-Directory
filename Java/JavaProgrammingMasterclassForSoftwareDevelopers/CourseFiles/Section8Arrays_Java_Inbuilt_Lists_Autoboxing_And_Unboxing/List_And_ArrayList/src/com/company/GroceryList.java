package com.company;

import java.util.ArrayList;

public class GroceryList {
    private ArrayList<String> groceryList = new ArrayList<String>();
    //    grocery list arraylist // Create new groceryList arraylist
//    ArrayList<String> groceryList = new ArrayList<>();

    //    addGroceryItem method(){} // pass a variable to add item to the groceryList
    public void addGroceryItem(String itemToAdd){
        System.out.println(itemToAdd + "... Was added");
        groceryList.add(itemToAdd);
    }

//    printGroceryList method(){} // prints the groceryList list. by iterating through it.
    public void printGroceryList(){
        System.out.println("output of the grocery list");

        groceryList.add("beer");
        groceryList.add("cheese");
        groceryList.add("beer");

        System.out.println(groceryList);
    }
//    removeGroceryItem method(){} // removes item from the list.
    public void removeGroceryItem(){
        System.out.println("remove item");
        groceryList.remove("this item was removed");
    }

//    findItem method(){} // returns grocer list item (bonus: return the index too)
    public void findItem(){
        System.out.println("item found");
//        groceryList.indexOf("maybe this method will return something when an item is searched for");


        groceryList.add("cheese");
        groceryList.add("beer");
        groceryList.add("cheese");
        groceryList.add("beer");
        System.out.println(groceryList.indexOf(0));
        System.out.println(groceryList);

//
        System.out.println(groceryList.indexOf("beesr"));

        System.out.println(groceryList.contains("beer"));
    }

}
