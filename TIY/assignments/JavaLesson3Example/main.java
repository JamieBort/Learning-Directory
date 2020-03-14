import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        System.out.println( "Hello. What is your name?" );
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.nextLine();
        System.out.println("It's nice to meet you, " + userInput);
    }
}
