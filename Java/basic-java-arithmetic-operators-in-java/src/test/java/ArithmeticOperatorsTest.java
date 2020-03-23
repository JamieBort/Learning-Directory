import com.github.javaparser.ParseException;
import net.doughughes.testifier.exception.CannotFindMethodException;
import net.doughughes.testifier.matcher.RegexMatcher;
import net.doughughes.testifier.test.TestifierTest;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.fail;

public class ArithmeticOperatorsTest extends TestifierTest {

    @Test
    public void addTwoIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addTwoIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addTwoIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addTwoIntegers() method should add two integers together",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] plus (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void addThreeIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addThreeIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addThreeIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addThreeIntegers() method should add three integers together",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] plus (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] plus (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void addTwoDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addTwoDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addTwoDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addTwoDoubles() method should add two doubles",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\].*?$"));
    }

    @Test

    public void addThreeDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addThreeDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addThreeDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addThreeDoubles() method should add three doubles",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void addANegativeAndPositiveNumberCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addANegativeAndPositiveNumber();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addANegativeAndPositiveNumber");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addANegativeAndPositiveNumber() method should add a negative number and a positive number",
                source, RegexMatcher.matches("^.*?(((UnaryExpr\\[negative\\] )(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[positive\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])|((UnaryExpr\\[positive\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[negative\\] )(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])).*?$"));
    }

    @Test
    public void addIntegerAndDoubleCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.addIntegerAndDouble();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("addIntegerAndDouble");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The addIntegerAndDouble() method should add an integer and a double together",
                source, RegexMatcher.matches("^.*?(((UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?(DoubleLiteralExpr)\\[[0-9.d]+?\\])|((UnaryExpr\\[.*?\\] )?(DoubleLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr)\\[[0-9.d]+?\\])).*?$"));
    }

    @Test
    public void subtractTwoNumbersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.subtractTwoNumbers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("subtractTwoNumbers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The subtractTwoNumbers() method should subtract two numbers",
                source, RegexMatcher.matches("^.*?((UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\]).*?$"));
    }

    @Test
    public void subtractThreeNumbersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.subtractThreeNumbers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("subtractThreeNumbers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The subtractThreeNumbers() method should subtract three numbers",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void subtractANegativeAndPositiveNumberCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.subtractANegativeAndPositiveNumber();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("subtractANegativeAndPositiveNumber");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The subtractANegativeAndPositiveNumber() method should subtract a negative number and a positive number",
                source, RegexMatcher.matches("^.*?(((UnaryExpr\\[negative\\] )(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[positive\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])|((UnaryExpr\\[positive\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[negative\\] )(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])).*?$"));
    }

    @Test
    public void combineAdditionAndSubtractionWithThreeNumbersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.combineAdditionAndSubtractionWithThreeNumbers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("combineAdditionAndSubtractionWithThreeNumbers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The combineAdditionAndSubtractionWithThreeNumbers() method should add and subtract three numbers",
                source, RegexMatcher.matches("^.*?(((UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])|((UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] plus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] minus (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\])).*?$"));
    }

    @Test
    public void multiplyTwoNumbersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.multiplyTwoNumbers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("multiplyTwoNumbers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The multiplyTwoNumbers() method should multiply two numbers",
                source, RegexMatcher.matches("^.*?((UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] times (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\]).*?$"));
    }

    @Test
    public void multiplyThreeNumbersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.multiplyThreeNumbers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("multiplyThreeNumbers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The multiplyThreeNumbers() method should multiply three numbers",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] times (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\] times (UnaryExpr\\[.*?\\] )?(IntegerLiteralExpr|DoubleLiteralExpr)\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void divideTwoIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideTwoIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideTwoIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The divideTwoIntegers() method should divide two integers",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] divide (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void divideThreeIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideThreeIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideThreeIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The divideThreeIntegers() method should divide three integers",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] divide (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] divide (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void divideTwoDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideTwoDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideTwoDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The divideTwoDoubles() method should divide two doubles",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] divide (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void divideThreeDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideThreeDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideThreeDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The divideThreeDoubles() method should divide three doubles",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] divide (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] divide (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void divideIntegerByDoubleCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideIntegerByDouble();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideIntegerByDouble");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The divideIntegerByDouble() method should divide an integer by a double",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] divide (UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\].*?$"));
    }

    @Test
    public void divideDoubleByIntegerCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.divideDoubleByInteger();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("divideDoubleByInteger");
        } catch (CannotFindMethodException e) {
            e.printStackTrace();
        }


        // check the structure of the code
        Assert.assertThat("The divideDoubleByInteger() method should divide a double by an integer",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?DoubleLiteralExpr\\[[0-9.d]+?\\] divide (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void remainderOfDividingTwoIntegersCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.remainderOfDividingTwoIntegers();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("remainderOfDividingTwoIntegers");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        Assert.assertThat("The remainderOfDividingTwoIntegers() method should get the remainder left over when dividing two integers",
                source, RegexMatcher.matches("^.*?(UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\] remainder (UnaryExpr\\[.*?\\] )?IntegerLiteralExpr\\[[0-9]+?\\].*?$"));
    }

    @Test
    public void combineAllFiveOperatorsWithParenthesisAndNegativeAndPositiveIntegersAndDoublesCodeStructureTest() throws NoSuchMethodException, IOException, ParseException {
        /* arrange */

        /* act */
        ArithmeticOperators.combineAllFiveOperatorsWithParenthesisAndNegativeAndPositiveIntegersAndDoubles();

        /* assert */
        String source = null;
        try {
            source = codeWatcher.getMainSourceCodeService().getDescriptionOfMethod("combineAllFiveOperatorsWithParenthesisAndNegativeAndPositiveIntegersAndDoubles");
        } catch (CannotFindMethodException e) {
            fail(e.getMessage());
        }

        // check the structure of the code
        Assert.assertThat("The combineAllFiveOperatorsWithParenthesisAndNegativeAndPositiveIntegersAndDoubles() method should use an expression that combines addition, subtraction, multiplication, division, and remainder operators. It must also use both positive and negative integers and doubles, as well as parenthesis.",
                source, RegexMatcher.matches("^(?=.*?UnaryExpr\\[negative\\].*?)(?=.*?UnaryExpr\\[negative\\].*?)(?=.*?DoubleLiteralExpr\\[[0-9.d]+?\\].*?)(?=.*?IntegerLiteralExpr\\[[0-9]+?\\].*?)(?=.*?plus.*?)(?=.*?minus.*?)(?=.*?divide.*?)(?=.*?times.*?)(?=.*?remainder.*?)(?=.*?EnclosedExpr.*?).*$"));
    }
}