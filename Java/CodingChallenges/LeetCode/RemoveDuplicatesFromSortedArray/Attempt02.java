import java.util.Arrays;

public class Attempt02 {
    public static void main(String[] args) throws Exception {
        // Example 1
        // int[] nums = { 1, 1, 2 };
        // Output: 2, nums = [1,2]

        // Example 2:
        int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
        // Output: 5, nums = [0,1,2,3,4]

        // System.out.println("hello");
        removeDuplicates(nums);
    }

    public static int removeDuplicates(int[] nums) {
        System.out.println("Original array: " + Arrays.toString(nums));
        int i = 1;
        int j = 0;
        while (i < nums.length) {
            if (nums[i] == nums[j]) {
                i++;
            } else {
                j++;
                nums[j] = nums[i];
            }
        }
        System.out.println("Modified array: " + Arrays.toString(nums));
        System.out.println("j:" + j);
        int length = j+1;
        return length;
    }
}

// class Solution {
//     public int removeDuplicates(int[] nums) {
//         if (nums.length < 2) {
//             return nums.length;
//         }
//         int i = 0;
//         int j = 0;
//         for (j = 0; j < nums.length-1;) {
//             if (nums[i] == nums[j + 1]) {
//                 j++;
//             } else {
//                 nums[i+1]=nums[j+1];
//                 j++;
//                 i++;
//             }
//         }
//         int length = i+1;
//         return length;
//     }
// }