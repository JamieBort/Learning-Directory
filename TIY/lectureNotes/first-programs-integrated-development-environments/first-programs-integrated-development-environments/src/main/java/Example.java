import java.util.Random;

/**
 * This is an example Java class file. We'll learn more about classes as we move
 * forward. What you are reading right now is called a block comment. Java
 * ignores any text in comments.
 *
 * This project is intended to introduce you to a few features of IntelliJ. Read
 * through the following comments and follow the instructions!
 *
 * This file contains two small problems that you need to fix. Before you fix
 * them, check out the toolbar at the top of this window. You should see a
 * dropdown box with an option that reads "Run All Tests (ExampleTest)". Go
 * ahead and select that. Now, to the right of it is a green arrow button. It
 * looks like a "play" icon. Click that.
 *
 * Unfortunately, that will produce a bunch of error messages, which will be
 * shown at the bottom of the window. For example:
 *
 * "Error:(43, 44) java: ';' expected".
 *
 * By following the instructions below, you should be able to fix these problems
 * and make the program run!
 *
 */
public class Example {

    /**
     * This is a "method". Methods are named blocks of code. Take note how
     * IntelliJ has highlighted the code in various colors. For example, we see
     * that some keywords like public and double and return are shown in bold.
     * Syntax highlighting like this makes it easier to read code. It also makes
     * it easier to find bad code.
     *
     * This method is named "addNumbers".
     */
    public double addNumbers(double x, double y) {
        return x + y;
    }

    /**
     * This is another method. It's named "sayHello". This method has a problem.
     * Your job is to fix the problem. As soon as you think you have it fixed,
     * click the green "run" button. You should see fewer errors reported.
     */
    public void sayHello() {
        /**
         * Take a close look at this line of code. There's a semicolon missing!
         * IntelliJ has highlighted where it belongs with a red squiggle.
         *
         * Todo: Add the missing semicolon!
         */
        System.out.println("Hello, world!");
    }

    /**
     * This is yet another method. It's named "getRandomColor".
     */
    public String getRandomColor() {
        int color = new Random().nextInt(6);

        /**
         * As with the sayHello method above, here we see IntelliJ reporting
         * another error. Take your mouse cursor and mouse over the content
         * with the squiggly line (but not the word "color"). You should see a
         * message that reads "unexpected token". This is IntelliJ telling you
         * that it found some code that it didn't expect to find. Or, to put
         * it another way, it didn't find something it expected to.
         *
         * If you look closely, the line containing "} else if(color == 3)" is
         * missing a curly brace.
         *
         * Once you've fixed this final error click the run button again. All of
         * the error messages should be fixed and you should see a new dialog at
         * the bottom of the window that contains green icons with the text
         * "ok". You should also see a message that reads "All 3 tests passed".
         *
         * Todo: add the missing curly brace
         */
        if(color == 0){
            return "red";
        } else if(color == 1){
            return "orange";
        } else if(color == 2){
            return "yellow";
        } else if(color == 3){
            return "green";
        } else if(color == 4){
            return "blue";
        } else if(color == 5){
            return "indigo";
        } else{
            return "violet";
        }
    }
}
