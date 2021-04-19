import java.util.*;

public class Test {

    public static void main(String args[]) {
        // Creating object of the
        // class linked list
        LinkedList<String> ll = new LinkedList<String>();

        // Adding elements to the linked list
        ll.add("A");
        ll.add("B");
        ll.addLast("C");
        ll.addFirst("D");
        ll.add(2, "E");

        System.out.println(ll);
        // ---------------------------------

        // Using the Get method and the
        // for loop
        for (int i = 0; i < ll.size(); i++) {

            System.out.print(ll.get(i) + " ");
        }

        System.out.println();

        // Using the for each loop
        for (String str : ll)
            System.out.print(str + " ");


            // ---------------------------------
        // ll.remove("B");
        // System.out.println(ll);
        // ll.remove(3);
        // System.out.println(ll);
        // ll.removeFirst();
        // System.out.println(ll);
        // ll.removeLast();
        // System.out.println(ll);

        // System.out.println(ll);

        // ---------------------------------
        // int intArray[]; // declaring array
        // intArray = new int[20]; // allocating memory to array

        // int[] myIntArray1 = new int[3];
        // int[] myIntArray2 = { 1, 2, 3 };
        // int[] myIntArray3 = new int[] { 1, 2, 3 };

        // System.out.println(myIntArray1.getClass());
        // System.out.println(myIntArray2.getClass());
        // System.out.println(myIntArray3.getClass());

        // System.out.println(intArray.getClass());
        // System.out.println(ll.getClass());
    }
}
