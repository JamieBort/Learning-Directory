package com.theironyard;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by doug on 8/30/17.
 */
public class MapProject {

    private static Map<Integer, Long> fibMap = new HashMap<>();

    static {
        fibMap.put(0, 0l);
        fibMap.put(1, 1l);
    }

    public static long calcFibonacci(int index) {
        if (!fibMap.containsKey(index)) {
            fibMap.put(index, fibMap.get(index - 1) + fibMap.get(index - 2));
        }
        return fibMap.get(index);
    }

    public static void main(String[] args) {
        long tick = System.currentTimeMillis();
        System.out.println(tick);

        for (int i = 0; i < 150; i++) {
            System.out.println("calc(" + i + ") = " + calcFibonacci(i));
        }

        System.out.println(System.currentTimeMillis() - tick);

    }
}