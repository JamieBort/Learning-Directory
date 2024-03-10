import org.junit.Test;

import static org.junit.Assert.*;

public class MyUnitTest {

    @Test
    public void concatenate() {
        MyUnit myUnit = new MyUnit();

        String result = myUnit.concatenate("one", "two");

        assertEquals("onetwo", result); // This doesn't do anything. So it works.

//        assertEquals("onetwo3", result); // This breaks it.
    }
}

//import org.junit.Test;
//import static org.junit.Assert.*;
//
//public class MyUnitTest {
//
//    @Test
//    public void testConcatenate() {
//        MyUnit myUnit = new MyUnit();
//
//        String result = myUnit.concatenate("one", "two");
//
//        assertEquals("onetwo", result);
//
//    }
//}