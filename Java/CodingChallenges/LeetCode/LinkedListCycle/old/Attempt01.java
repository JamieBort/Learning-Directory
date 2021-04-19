import java.util.*;

public class Attempt01 {

    public static void main(String args[]) {
        LinkedList<String> ll = new LinkedList<String>();
        LinkedList<Integer> aa = new LinkedList<Integer>();
        aa.add(3);
        aa.add(2);
        aa.add(0);
        aa.add(-4);

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
    }

    public static boolean hasCycle(ListNode head) {
        
    }
    
}
