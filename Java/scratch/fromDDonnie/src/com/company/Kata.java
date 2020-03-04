package com.company;

public class Kata {

    public static int sum(int[] numbers) {

        if (numbers == null || numbers.length < 2) {
            return 0;
        }

        int lowest = numbers[0];
        int highest = numbers[0];
        int sum = 0;
        for (int i:numbers) {
            lowest = Math.min(lowest, i);
            highest = Math.max(highest, i);
            sum +=i;
        }

        return sum - lowest - highest;
    }
}