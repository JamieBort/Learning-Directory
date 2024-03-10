package Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.LinkedListsPart2_117;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

public class Demo_117 {

    public void printList(){
        System.out.println("Inside the printList() method in the Demo class. No parameters");
    }

    public static void printList(LinkedList<String> theArrayList){
        System.out.println("Inside the printList() method in the Demo class.");
        Iterator<String> i = theArrayList.iterator();
        while(i.hasNext()){
            System.out.println("Now visiting: " + i.next());
        } 
        System.out.println("===========================");
    }

    public static boolean addInOrder(LinkedList<String> linkedList, String newCity){
        System.out.println("Inside the addInOrder() method in the Demo class.");
        ListIterator<String> stringListIterator = linkedList.listIterator();
        while(stringListIterator.hasNext()){
            int comparison = stringListIterator.next().compareTo(newCity);
            if(comparison==0){
                // newCity is equal the next elemetn. Do not add.
                System.out.println(newCity + " is already included as a destination. Not added again.");
                return false;
            } else if(comparison>0){
                // newCity should appear before this one.
                stringListIterator.previous(); // need to back up because in the process of checking we've found it needs to go BEFORE the current location/element.
                stringListIterator.add(newCity);
                return true;
                // System.out.println(newCity + " has been included.");
            }else if (comparison<0){
                // move on to next city.
            }
        }
        stringListIterator.add(newCity);
        return true;

    }

}