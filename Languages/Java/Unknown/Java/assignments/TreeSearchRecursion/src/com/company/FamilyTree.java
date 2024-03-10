package com.company;

import java.util.ArrayList;
import java.util.List;

public class FamilyTree {

    private String name;
    private List<FamilyTree> children;

    public FamilyTree(String name) {
        this.name = name;
        children = new ArrayList<>();
    }

    public void addChild(FamilyTree child) {
        children.add(child);
    }

    public List<FamilyTree> getChildren() {
        return children;
    }

    //Returns true if the tree has a person with "name" anywhere
    public boolean contains(String name) {
//        Write the contains() method, which simply determines whether the tree contains (somewhere) someone with that name. (Hint: you will need to use recursion.)

// test for if a name is in the top part of the tree
//        if true, then return true.
//        if false then test to see if it is in lower branch of the tree.
//               if tree then return true.
//               if false then test to see if it is in lower branch of the tree.
//                      etc.


        if (children.forEach() == name
// does the name live in the array?               children.forEach() == name
                ) {
            return true;
        } else {
// run the same method on the children
        }
        return false;
    }


    public int getNumChildren() {
        return children.size();
    }

    //Returns the number of descendants of this
    public int getNumDescendants() {
        int sum = 0;
        sum += getNumChildren();
        if (sum == 0) {
            System.out.println("My sum: " + sum);
            return sum;

        }

//        need to run getNumChildren() on the children of the parent

        System.out.println("My sum: " + sum);
        return sum;
    }

    //Returns the number of descendants (including grandchildren, great grandchildren, etc)
    //Of name. If name is NOT in the tree, return -1
    public int getNumDescendantsOf(String name) {
        //This is an extra
        return 0;
    }
}

//from justin:

//    public boolean contains(String name) {
//
//        for (FamilyTree child : this.getChildren()) {
//            if (child.getName().equals(name)) {
//                return true;
//            } else if (child.contains(name)) {
//                return true;
//            }
//        }
//        return false;
//    }