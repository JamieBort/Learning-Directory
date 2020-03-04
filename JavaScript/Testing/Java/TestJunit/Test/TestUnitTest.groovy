//import TestUnit;
import org.junit.Assert;
//import org.junit.Test;

class TestUnitTest extends GroovyTestCase {
    public void test(){
        TestUnit jtest = new TestUnit();
        Assert.assertEquals(10, jtest.test());
        Assert.assertEquals("This is not 10!!!",10, jtest.test());

        System.out.println("Unit test1 finished without error.");
    }
}

//class TestUnitTest extends GroovyTestCase {
//    void testTest() {
//    }
//}

//public class TestTestJunit {
//    @Test
//    public void unit_test1(){
//        TestJunit jtest = new TestJunit();
//        Assert.assertEquals(10, jtest.test());
//        Assert.assertEquals("This is not 10!!!",10, jtest.test());
//
//        System.out.println("Unit test1 finished without error.");
//    }
//}

