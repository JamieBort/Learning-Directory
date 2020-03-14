package com.company;

import java.util.Comparator;

public class ComparatorFactory {

    /**
     * This method returns a String Comparator. The comparator class itself is
     * defined within the getQsFirstComparator() method. A new instance of this
     * class is returned as a Comparator<String> (the interface the
     * QsFirstComparator class implements.
     *
     * @return a String Comparator
     */
    public Comparator<String> getQsFirstComparator() {

        /*
            This is a local class. It's defined within a method and can only be
            created and used within this class.
         */
        class QsFirstComparator implements Comparator<String> {

            @Override
            public int compare(String str1, String str2) {
                if ((str1.startsWith("q") || str1.startsWith("Q")) &&
                        !(str2.startsWith("q") || str2.startsWith("Q"))) {
                    return 1;

                } else if (!(str1.startsWith("q") || str1.startsWith("Q")) &&
                        (str2.startsWith("q") || str2.startsWith("Q"))) {
                    return -1;

                } else {
                    return str1.compareTo(str2);
                }
            }
        }
        /*
            Because the QsFirstComparator implements Comparator<String>, we can
            return it as this type of object. Other code is none the wiser that
            it is defined in this method.
         */
        return new QsFirstComparator();
    }
}