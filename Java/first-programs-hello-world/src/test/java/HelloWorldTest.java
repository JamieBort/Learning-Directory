import net.doughughes.testifier.output.OutputStreamInterceptor;
import net.doughughes.testifier.test.TestifierTest;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThan;

public class HelloWorldTest extends TestifierTest {

    @Test
    public void testMain() {
        /* arrange */

        /* act */
        // run the main method
        HelloWorld.main(new String[]{});

        /* assert */
        OutputStreamInterceptor out = (OutputStreamInterceptor) System.out;
        assertThat("No output was printed.",
                out.getPrinted().size(), greaterThan(0));
        assertThat("\"Hello World\" was not printed",
                out.getPrinted().get(0), is("Hello World"));

    }
}