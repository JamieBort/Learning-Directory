package com.company;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import static com.sun.tools.doclint.Entity.lambda;
import static jdk.nashorn.internal.objects.Global.print;

/**
 * Created by gilpratte on 7/26/17.
 */
public class ComparatorDemo {

    public static void main(String[] args) {
        List<Address> addresses = new ArrayList<>();
        addresses.add(new Address("111 Main St.", "Fayetteville", "NY", "13066"));
        addresses.add(new Address("222 Maple St.", "Manlius", "NY", "13104"));
        addresses.add(new Address("333 Oak Rd.", "Raleigh", "NC", "27609"));
        addresses.add(new Address("7 Jones Circle", "Raleigh", "NC", "27713"));

        //Feel free to add in more addresses if you would like

        System.out.println("Before sorting");
        print(addresses);

        // Write an anonymous class to sort by state (alphabetically)
        Collections.sort(addresses, new Comparator<Address>() {
            @Override
            public int compare(Address a1, Address a2) {
                return a1.getState().compareTo(a2.getState());
            }
        });


        System.out.println("\nAfter sorting by state");
        print(addresses);

        // Write a lambda to sort by city alphabetically
        Collections.sort(addresses, (a1, a2) -> a1.getCity().compareTo(a2.getCity()));


        System.out.println("\nAfter sorting by city");
        print(addresses);
    }

    private static void print(List<Address> addresses) {
        for(Address address : addresses) {
            System.out.println(address);
        }
    }
}
