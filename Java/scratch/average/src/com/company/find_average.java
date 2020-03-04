package com.company;

class find_average {
    public find_average(int[] array) {
        double sum = 0;
        double average;
        int i;
        for (i = 0; i < array.length; i++)
            sum += array[i];

        average = sum / array.length;
        System.out.println(average);
//        return average;

    }
}