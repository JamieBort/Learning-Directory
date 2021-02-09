package first_package;
import second_package.*;

public class Main {
    public static void main (String[] args) {
        System.out.println("Inside the main method");
        // Printer printer2 = new Printer();
        Printer printer = new Printer();
        printer.printerMethod();
        AnotherPrinter anotherPrinter = new AnotherPrinter();
        anotherPrinter.printerMethod();
    }
}