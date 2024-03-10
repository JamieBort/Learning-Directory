package com.company;

import java.util.HashMap;

public class MapProject {

    public static long calcFibonacci(int index) {

        HashMap<Integer, Long> myHashMap = new HashMap<>();

        if (index == 1) {
            myHashMap.put(1, 1l);
            return myHashMap.get(index);
//            return 1;
        }
        if (index == 0) {
           myHashMap.put(0, 0l);
            return myHashMap.get(index);
//            return 0;
        }
//        return myHashMap.get(index - 1) + myHashMap.get(index - 2);

        System.out.println(myHashMap.get(index));

        return 1l;

//        return calcFibonacci(index - 1) + calcFibonacci(index - 2);
    }
}

//We want to make our function faster by having it learn. In order to accomplish this, you will need to re-write the function to use a map. The basic flow in the function should be:

// 1. Check to see if the number we are trying to calculate is in the map.

// 2. If it is not in the map, calculate as we normally would, but before returning the value, save the value we've calculated in the map for later.
