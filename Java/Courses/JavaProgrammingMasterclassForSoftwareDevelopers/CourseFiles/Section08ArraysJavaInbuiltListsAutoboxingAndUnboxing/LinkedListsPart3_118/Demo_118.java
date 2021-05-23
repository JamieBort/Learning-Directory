package Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.LinkedListsPart3_118;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
import java.util.Scanner;

public class Demo_118 {

    public static void printList(LinkedList<String> theArrayList) {
        System.out.println("Inside the printList() method in the Demo class.");
        Iterator<String> i = theArrayList.iterator();
        while (i.hasNext()) {
            System.out.println("Now visiting: " + i.next());
        }
        System.out.println("===========================");
    }

    public static boolean addInOrder(LinkedList<String> linkedList, String newCity) {
        System.out.println("Inside the addInOrder() method in the Demo class.");
        ListIterator<String> stringListIterator = linkedList.listIterator();
        while (stringListIterator.hasNext()) {
            int comparison = stringListIterator.next().compareTo(newCity);
            if (comparison == 0) {
                // newCity is equal the next elemetn. Do not add.
                System.out.println(newCity + " is already included as a destination. Not added again.");
                return false;
            } else if (comparison > 0) {
                // newCity should appear before this one.
                stringListIterator.previous(); // need to back up because in the process of checking we've found it
                                               // needs to go BEFORE the current location/element.
                stringListIterator.add(newCity);
                return true;
                // System.out.println(newCity + " has been included.");
            } else if (comparison < 0) {
                // move on to next city.
            }
        }
        stringListIterator.add(newCity);
        return true;
    }

    public static void visit(LinkedList cities) {
        Scanner scanner = new Scanner(System.in);
        boolean quit = false;
        ListIterator<String> listIterator = cities.listIterator();
        if (cities.isEmpty()) {
            System.out.println("No cities in the itinerary.");
        } else {
            System.out.println("Now visiting " + listIterator.next());
            printMenu();
        }
        while (!quit) {
            int action = scanner.nextInt();
            scanner.nextLine();
            switch (action) {
                case 0:
                    System.out.println("The holiday is over.");
                    quit = true;
                    break;
                case 1:
                    if (listIterator.hasNext()) {
                        System.out.println("Now visiting " + listIterator.next());
                    } else {
                        System.out.println("We've reached the end of the list.");
                    }
                    break;
                case 2:
                    if (listIterator.hasPrevious()) {
                        System.out.println("Now visiting " + listIterator.previous());
                    } else {
                        System.out.println("We are at the start of the list.");
                    }
                    break;
                case 3:
                    printMenu();
                    break;

                default:
                    printMenu();
            }
        }
    }

    private static void printMenu(){
        System.out.println("Available actions: \nPress");
        System.out.println("0 to quit \n1 go to next city \n2 go to previous city \n3 see menu again.");
    }

}