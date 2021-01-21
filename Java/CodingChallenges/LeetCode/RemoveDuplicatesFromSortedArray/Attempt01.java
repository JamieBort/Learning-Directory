import java.util.Arrays;

// import jdk.javadoc.internal.doclets.formats.html.SourceToHTMLConverter;

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        // int[] nums = { 1, 1, 2 };
        // int[] nums = {1, 1, 2, 3};
        int[] nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
        System.out.print(removeDuplicates(nums));
    }

    // public int removeDuplicates(int[] nums) {
    static int removeDuplicates(int[] nums) {
        // System.out.print("\n-------------------------\n");
        // System.out.println("Original array: " + Arrays.toString(nums));
        // System.out.print("\n-------------------------\n");
        // System.out.print("Want to return length of 2 and [1, 2, 2]");
        // System.out.print("\n-------------------------\n");

        if (nums.length < 2) {
            return nums.length;
        }

        int i = 0;
        int j = 0;

        for (j = 0; j < nums.length-1;) {
            if (nums[i] == nums[j + 1]) {
                // System.out.print("They're equal. ");
                // System.out.print("Do this. ");
                j++;
            } else {
                // System.out.print("Do this instead.");
                nums[i+1]=nums[j+1];
                j++;
                i++;
            }
        }
        System.out.print("\n-------------------------\n");


        System.out.println("Modified array: " + Arrays.toString(nums));
        System.out.print("\n-------------------------\n");
        int length = i+1;

        return length;
        // }
    }
}