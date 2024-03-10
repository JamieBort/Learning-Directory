package com.company;

import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

public class MethodsClassTest {

    @Rule //Another annotation directed to JUnit
    public ExpectedException expected = ExpectedException.none();


    @Before
    public void setUp() throws Exception {
        System.out.println("Setting up...");
    }

    @After
    public void tearDown() throws Exception {
        System.out.println("Cleaning up");
    }

    @Test
    public void testBasicCase() throws Exception {
        System.out.println("Running basic test");
        assertTrue(MethodsClass.containsOne(1));
        assertFalse(MethodsClass.containsOne(2));
    }

    @Test
    public void testLargeNumbers () throws Exception {
        System.out.println("Testing large numbers");
        assertTrue(MethodsClass.containsOne(10000002));
        assertFalse(MethodsClass.containsOne(986974958));
    }

    @Test
    public void testMediumNumbers () throws Exception {
        System.out.println("Testing medium numbers");
        assertTrue(MethodsClass.containsOne(10));
        assertFalse(MethodsClass.containsOne(92));
    }

    @Test
    public void testNegativeNumbers () throws Exception {
        System.out.println("Testing negative values");
        expected.expect(BadInputException.class);
        MethodsClass.containsOne(-1);
        MethodsClass.containsOne(-20000);
    }


}