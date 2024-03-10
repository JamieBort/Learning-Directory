// from: http://codingbat.com/prob/p136351

// public class front3 {
//     public static void main (String args[]) {
// 	// static void primitives() {
//       System.out.println("JavJavJav"); 
//     }
//   }

// pubic String front3 (String str) {
// pubic void String front3 (String str) {

// }

// }

// public class front3 {

import java.util.Arrays;

public class front3 {
    private static void printArray(int[] anArray) {
        System.out.println(Arrays.toString(anArray));
    }

    static void numArray() {
        int[] testArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        printArray(testArray);
        // String[] array = new String[] {"John", "Mary", "Bob"};
        // System.out.println(Arrays.toString();
        // String[] array = new String[] {"John", "Mary", "Bob"};
        // System.out.println(array.toString());
        // int[] myArray = {1,5};
        // System.out.println(Arrays.toString(myArray));
    }

    static void primitives() {
        String str = new String("quick brown fox jumps over the lazy dog");
        System.out.println("The entire string.");
        System.out.println(str);
        System.out.println("Substring starting from index 15:");
        System.out.println(str.substring(15));
        System.out.println("Substring starting from index 15 and ending at 20:");
        System.out.println(str.substring(15, 20));
    }

    public static void main(String[] args) {
        // numArray();
        int[] testArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        printArray(testArray);
        primitives();
    }
}

// class BasicsDemo {
// // Adapted from
// http://www.ntu.edu.sg/home/ehchua/programming/java/J1a_Introduction.html
// static void print() {
// System.out.println("\n\nInside print ...");
// System.out.println("Hello, world!!"); // Advance cursor to beginning of next
// line
// System.out.println(); // Print empty line
// System.out.print("Hello, world!!"); // Cursor stayed after the printed string
// System.out.println("Hello,");
// System.out.print(" "); // Print a space
// System.out.print("world!!");
// }

// static void primitives() {
// System.out.println("\n\nInside primitives ...");
// // literals demo
// int intHex = 0x0041;
// System.out.println("intHex: " + intHex);
// int intBinary = 0b01000001;
// System.out.println("intBinary: " + intBinary);
// int intChar = 'A'; // holds decimal equivalent, which is 65
// System.out.println("intChar: " + intChar);
// int intUnderscore = 1_23_456;
// System.out.println("intUnderscore: " + intUnderscore);
// }

// public static void main(String[] args) {
// // Language Basics 1
// //print();
// primitives();
// }
// }