package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here

        /*
            The ComparatorFactory class is a factory that knows how to make
            comparators. The only comparator it knows how to make (right now)
            is one that compares strings for alphabetical order. However, this
            comparator considers "q"s to be the first letter of the alphabet.
         */
        ComparatorFactory factory = new ComparatorFactory();

        /*
            Compare "Apple" to "Quite" using the Qs-first comparator. This
            should return 1 because Apple is considered to be lexicographically
            after Quite, according to our comparator.
         */
        System.out.println(
                factory.getQsFirstComparator().compare("Apple", "Quite")
        );

    }
}