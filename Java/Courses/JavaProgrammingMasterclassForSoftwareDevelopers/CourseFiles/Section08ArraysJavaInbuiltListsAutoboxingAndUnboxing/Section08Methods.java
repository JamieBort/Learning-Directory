package Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing;

import java.util.ArrayList;
import java.util.LinkedList;

import Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.LinkedListsPart1_116.*;
import Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.LinkedListsPart2_117.Demo;

public class Section08Methods {

    public void Arrays_Challenge_Exercise_100() {
        int[] givenArray = {106, 26, 81, 5, 15};
        Arrays_Challenge_Exercise_100 arrays_Challenge_Exercise_100 = new Arrays_Challenge_Exercise_100();
        arrays_Challenge_Exercise_100.sortArrayToDescendingOrder(givenArray);
        // arrays_Challenge_Exercise_100.myMax(givenArray);
    }

    public void LinkedListsPart1_116() {

        // Used to demonstrate how the valus of customer get overwritten.
        Customer customer = new Customer("Tim", 54.96);
        Customer anotheCustomer;
        anotheCustomer = customer;
        anotheCustomer. setBalance(12.18);
        System.out.println("Balance for customer " + customer.getName() + " is " + customer.getBalance());

        // used to demonstrate how a lot of resources will be needed when ArrayList is large.
        ArrayList<Integer> intList = new ArrayList<Integer>();
        intList.add(1);
        intList.add(3);
        intList.add(4); 
        for (int i = 0; i < intList.size(); i++) {
            System.out.println(i + " : " + intList.get(i));
        }
        intList.add(1,2); 
        for (int i = 0; i < intList.size(); i++) {
            System.out.println(i + " : " + intList.get(i));
        }

    }

    public void LinkedListsPart2_117(){
        System.out.println("Inside the LinkedListsPart2_117() method in the Section08Methods class.");
        // printList(LinkedList<String> theArrayList) in the Demo class is static.
        // So this Demo demo = new Demo(); isn't needed any more.
        // Demo demo = new Demo(); 
        LinkedList<String> placesToVisit = new LinkedList<String>(); 
        
        placesToVisit.add("Sydney"); // Sydney points to Melbourne.
        placesToVisit.add("Melbourne");
        placesToVisit.add("Brisbane");
        placesToVisit.add("Perth");
        placesToVisit.add("Canberra");
        placesToVisit.add("Adelaide");
        placesToVisit.add("Darwin");

        Demo.printList(placesToVisit);
        // demo.printList();

        placesToVisit.add(1,"Alice Springs"); // Now Sydney points to Alice Springs; which points to Melbourne.
        Demo.printList(placesToVisit);
        
        placesToVisit.remove(4); // Perth is removed.
        Demo.printList(placesToVisit);

        placesToVisit.remove(); // Head is removed/sydney is removed.
        Demo.printList(placesToVisit);

    }

    public void LinkedListsPart3_118(){
        System.out.println("Inside the LinkedListsPart3_118() method in the Section08Methods class.");
        LinkedList<String> placesToVisit = new LinkedList<String>(); 
        Demo.addInOrder(placesToVisit, "Sydney");
        Demo.addInOrder(placesToVisit, "Melbourne");
        Demo.addInOrder(placesToVisit, "Brisbane");
        Demo.addInOrder(placesToVisit, "Perth");
        Demo.addInOrder(placesToVisit, "Canberra");
        Demo.addInOrder(placesToVisit, "Adelaide");
        Demo.addInOrder(placesToVisit, "Darwin");
        Demo.printList(placesToVisit);
    }

}