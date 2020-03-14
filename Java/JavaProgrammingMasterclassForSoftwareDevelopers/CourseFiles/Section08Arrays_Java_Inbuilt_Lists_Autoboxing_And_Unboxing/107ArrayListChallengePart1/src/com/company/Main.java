// Create a program that implements a simple mobile phone with the following capabilities.
// Able to store, modify, remove and query contact names.
// You will want to create a separate class for Contacts (name and phone number).
// Create a master class (MobilePhone) that holds the ArrayList of Contacts
// The MobilePhone class has the functionality listed above.
// Add a menu of options that are available.
// Options:  Quit, print list of contacts, add new contact, update existing contact, remove contact
// and search/find contact.
// When adding or updating be sure to check if the contact already exists (use name)
// Be sure not to expose the inner workings of the Arraylist to MobilePhone
// e.g. no ints, no .get(i) etc
// MobilePhone should do everything with Contact objects only.

package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

public class Main {

    public static void main(String[] args) {
        ArrayList<Contacts> arrayList = new ArrayList<>();
        arrayList.add(new Contacts("Jim", "Elm Street", "jim@jimbob.com", "1234567890"));
        arrayList.add(new Contacts("Pam", "Oak Street", "pam@pamsplace.com", "0987654321"));
        arrayList.get(0).printContact();
        arrayList.get(1).printContact();
    }
}
