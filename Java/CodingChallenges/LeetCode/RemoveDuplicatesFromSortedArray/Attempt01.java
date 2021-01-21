import java.util.Arrays;

// import jdk.javadoc.internal.doclets.formats.html.SourceToHTMLConverter;

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        int[] nums = { 1, 1, 2 };
        int mySecondInteger = myMethod(nums);
        System.out.print(mySecondInteger);
        
    }

    static int myMethod(int[] parameterArray) {
        System.out.print("\n-------------------------\n");
        System.out.println("Original array: " + Arrays.toString(parameterArray));
        System.out.print("\n-------------------------\n");
        System.out.print("Want to return length of 2 and [1, 2, 2]");
        System.out.print("\n-------------------------\n");


        return 2;
      }
}