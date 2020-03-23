import com.github.javaparser.ParseException;
import net.doughughes.testifier.exception.CannotFindMethodException;
import net.doughughes.testifier.matcher.RegexMatcher;
import net.doughughes.testifier.output.OutputStreamInterceptor;
import net.doughughes.testifier.test.TestifierTest;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.core.IsInstanceOf.instanceOf;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

public class BasicExpressionsTest extends TestifierTest {

    @Test
    public void outputBooleanTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputBoolean();

        /* assert */
        ArrayList printed = outputWatcher.getPrinted();
        assertThat("The outputBoolean() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputBoolean() should be a boolean keyword.",
                printed.get(0), isOneOf(true, false));
    }

    @Test
    public void outputTrueTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputTrue();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputTrue() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputTrue() should be a boolean keyword for true.",
                printed.get(0), equalTo(true));
    }

    @Test
    public void outputFalseTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputFalse();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputFalse() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputFalse() should be a boolean keyword for false.",
                printed.get(0), equalTo(false));
    }

    @Test
    public void outputPositiveIntegerTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputPositiveInteger();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputPositiveInteger() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputPositiveInteger() should be a positive integer.",
                (int) printed.get(0), greaterThanOrEqualTo(0));
    }

    @Test
    public void outputNegativeIntegerTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputNegativeInteger();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputNegativeInteger() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputNegativeInteger() should be a negative integer.",
                (int) printed.get(0), lessThan(0));
    }

    @Test
    public void outputPositiveDoubleTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputPositiveDouble();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputPositiveDouble() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputPositiveDouble() should be a positive double.",
                (double) printed.get(0), greaterThanOrEqualTo(0.0));
    }

    @Test
    public void outputNegativeDoubleTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputNegativeDouble();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputNegativeDouble() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputNegativeDouble() should be a negative double.",
                (double) printed.get(0), lessThan(0.0));
    }

    @Test
    public void outputHelloWorldTest() {
        /* arrange */

        /* act */
        BasicExpressions.outputHelloWorld();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputHelloWorld() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputHelloWorld() should be \"Hello World!\"",
                printed.get(0), equalTo("Hello World!"));
    }

    @Test
    public void outputConcatenationOfTwoStringsTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputConcatenationOfTwoStrings();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputConcatenationOfTwoStrings() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputConcatenationOfTwoStrings() should be a String.",
                printed.get(0), instanceOf(String.class));
    }

    @Test
    public void outputConcatenationOfTwoStringsCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputConcatenationOfTwoStrings();

        /* assert */
        String methodSource = null;
        try {
            methodSource = codeWatcher.getMainSourceCodeService().getMethodSource("outputConcatenationOfTwoStrings");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        assertThat("The outputConcatenationOfTwoStrings() method should have two Strings concatenated together",
                methodSource, RegexMatcher.matches("(?s)^.*\".*?\" \\+ \".*?\".*$"));
    }

    @Test
    public void outputConcatenationOfStringAndIntegerTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputConcatenationOfStringAndInteger();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputConcatenationOfStringAndInteger() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputConcatenationOfStringAndInteger() should be a String.",
                printed.get(0), instanceOf(String.class));
    }

    @Test
    public void outputConcatenationOfStringAndIntegerCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputConcatenationOfStringAndInteger();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("outputConcatenationOfStringAndInteger");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        assertThat("The outputConcatenationOfStringAndInteger() method should concatenate a String and an integer together",
                source, RegexMatcher.matches("^.*?((StringLiteralExpr\\[.*?\\] plus IntegerLiteralExpr\\[.*?\\])|(IntegerLiteralExpr\\[.*?\\] plus StringLiteralExpr\\[.*?\\])).*?$"));
    }


    @Test
    public void outputSumOfTwoIntegersTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfTwoIntegers();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputSumOfTwoIntegers() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputSumOfTwoIntegers() should be an integer.",
                printed.get(0), instanceOf(int.class));
    }

    @Test
    public void outputSumOfTwoIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfTwoIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("outputSumOfTwoIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        assertThat("The outputSumOfTwoIntegers() method should add two integers together",
                source, RegexMatcher.matches("^.*?(IntegerLiteralExpr\\[.*?\\] plus IntegerLiteralExpr\\[.*?\\]).*?$"));

    }

    @Test
    public void outputSumOfTwoDoublesTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfTwoDoubles();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputSumOfTwoDoubles() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputSumOfTwoDoubles() should be a double.",
                printed.get(0), instanceOf(double.class));
    }

    @Test
    public void outputSumOfTwoDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfTwoDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("outputSumOfTwoDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        assertThat("The outputSumOfTwoDoubles() method should add two doubles together",
                source, RegexMatcher.matches("^.*?DoubleLiteralExpr\\[.*?\\] plus DoubleLiteralExpr\\[.*?\\].*?$"));
    }

    @Test
    public void outputSumOfADoubleAndAnIntegerTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfADoubleAndAnInteger();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputSumOfADoubleAndAnInteger() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputSumOfADoubleAndAnInteger() should be a double.",
                printed.get(0), instanceOf(double.class));
    }

    @Test
    public void outputSumOfADoubleAndAnIntegerCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfADoubleAndAnInteger();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("outputSumOfADoubleAndAnInteger");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        assertThat("The outputSumOfADoubleAndAnInteger() method should add an integer and double together",
                source, RegexMatcher.matches("^.*?((DoubleLiteralExpr\\[.*?\\] plus IntegerLiteralExpr\\[.*?\\])|(IntegerLiteralExpr\\[.*?\\] plus DoubleLiteralExpr\\[.*?\\])).*?$"));
    }

    @Test
    public void outputSumOfThreeIntegersTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfThreeIntegers();

        /* assert */
        ArrayList printed = ((OutputStreamInterceptor) System.out).getPrinted();
        assertThat("The outputSumOfThreeIntegers() method should have printed some output.",
                printed.size(), greaterThan(0));
        assertThat("The value printed from outputSumOfThreeIntegers() should be an integer.",
                printed.get(0), instanceOf(int.class));
    }

    @Test
    public void outputSumOfThreeIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        BasicExpressions.outputSumOfThreeIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("outputSumOfThreeIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        assertThat("The outputSumOfThreeIntegers() method should add three integers together",
                source, RegexMatcher.matches("^.*?IntegerLiteralExpr\\[.*?\\] plus IntegerLiteralExpr\\[.*?\\] plus IntegerLiteralExpr\\[.*?\\].*?$"));
    }

}