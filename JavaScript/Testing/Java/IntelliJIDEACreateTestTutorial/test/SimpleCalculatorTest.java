import static org.junit.Assert.*;
//import com.*;
//import org.;

import org.junit.Assert;
import org.junit.Test;

//public class SimpleCalculatorTest {
//
//    @org.junit.Test
//    public void add() {
//    }
//
//    @org.junit.Test
//    public void subtract() {
//    }
//
//    @org.junit.Test
//    public void multiply() {
//    }
//
//    @org.junit.Test
//    public void divide() {
//    }
//}




// ================================================

//In this case, we have to manually create the test class, which in this case is SimpleCalculatorTest:

//package com.javacodegeeks.intellij.test;

//public class SimpleCalculatorTest {
//
//    @Test
//    public void testAdd() {
//
//    }
//}


// ================================================

//The @Test annotation will appear in red, because the symbol cannot be resolved, since JUnit is not added to the path. To add it, we have to place the caret in the annotation, and press Alt + Return. A window with several options will appear; we have to choose the first, the one saying “Add JUnit4 to classpath“.

//        After this, we have to choose to reference JUnit to the distribution included with IntelliJ IDEA; or to add it locally to the project, in a directory.

//        Regardless the option we choose, now the annotation should not be marked in red, having now every JUnit symbols available. So, we could write the following test:

//        package com.javacodegeeks.intellij.test;

        import org.junit.Before;
        import org.junit.Test;

        import static org.junit.Assert.assertEquals;

public class SimpleCalculatorTest {

    private SimpleCalculator calculator;

    @Before
    public void setUp() {
        this.calculator = new SimpleCalculator();
    }

    @Test
    public void testAdd() {
        float n1 = 1;
        float n2 = 2;
        float expected = 3;
        float actual;

        actual = this.calculator.add(n1, n2);

        assertEquals(expected, actual, 0.000);
    }
}