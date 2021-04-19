// import java.util.*;
import java.util.LinkedList;

public class Main {

    public static void main(String args[]) {
        LinkedList<Integer> head = new LinkedList<Integer>();
        head.add(3);
        head.add(2);
        head.add(0);
        head.add(-4);
        head.add(2);

        // System.out.println(ll);
        Solution solution = new Solution();
        solution.hasCycle(head);
        // solution.hasCycle(head);

    }
}
