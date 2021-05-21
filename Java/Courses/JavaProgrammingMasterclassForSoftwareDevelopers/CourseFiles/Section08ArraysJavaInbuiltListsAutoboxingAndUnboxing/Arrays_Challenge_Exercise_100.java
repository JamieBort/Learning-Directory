// Create a program using arrays that sorts a list of integers in descending order.
// Descending order is highest value to lowest.
// In other words if the array had the values in it 106, 26, 81, 5, 15 your program should
// ultimately have an array with 106,81,26, 15, 5 in it.
// Set up the program so that the numbers to sort are read in from the keyboard.
// Implement the following methods - getIntegers, printArray, and sortIntegers
// getIntegers returns an array of entered integers from keyboard
// printArray prints out the contents of the array
// and sortIntegers should sort the array and return a new array containing the sorted numbers
// you will have to figure out how to copy the array elements from the passed array into a new
// array and sort them and return the new sorted array.

package Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing;

public class Arrays_Challenge_Exercise_100 {
    // int[] givenArray = {106, 26, 81, 5, 15};
    int pointer1;
    int pointer2;
    // int[] modifiedArray = new int[givenArray.length];

    public int[] sortArrayToDescendingOrder(int[] anArray) {
        int[] modifiedArray = new int[anArray.length];
        // modifiedArray[0]=106;
        modifiedArray[0]=myMax(anArray);

        // modifiedArray={106, 26, 81, 5, 15};
        // for(int element : anArray) System.out.println(element);
        // int[] modifiedArray = {106, 26, 81, 5, 15};
        
        System.out.println("The elements of the modifiedArray are:");
        for (int element : modifiedArray)
            System.out.println(element);
        return modifiedArray;
    }

    // this finds the highest integer
    public int myMax(int[] anArray) {
        int i;
        int max = anArray[0];
        for (i = 1; i < anArray.length; i++) {
            if (anArray[i] > max) {
                max = anArray[i];
            }
        }
        System.out.println("the max is: " + max);
        return max;
    }

    // sortArrayToDescendingOrder(givenArray);

    // public void myPrintMethod() {
    // System.out.println("hello from Arrays_Challenge_Exercise_100");
    // System.out.println("givenArray: " + givenArray);
    // for(int element : givenArray) System.out.println(element);
    // }
}