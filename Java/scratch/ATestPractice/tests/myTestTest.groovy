import TestJunit
import org.junit.Assert;
import org.junit.Test;

//public class TestTestJunit {
    class myTestTest extends GroovyTestCase {
    @Test
    public void unit_test1(){
        TestJunit jtest = new TestJunit();
        com.sun.tools.javac.util.Assert.assertEquals(10, jtest.test());
        com.sun.tools.javac.util.Assert.assertEquals("This is not 10!!!",10, jtest.test());

        System.out.println("Unit test1 finished without error.");
    }
}


//class myTestTest extends GroovyTestCase {
//}
