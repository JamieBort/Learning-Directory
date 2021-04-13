import java.util.Arrays;

public class Attempt04 {
    public static void main(String[] args) throws Exception {

        // Example 1:
        // int[] nums = { 2, 7, 11, 15 };
        // int target = 9;
        // Output: [0,1]
        // Output: Because nums[0] + nums[1] == 9, we return [0, 1].

        // Example 2:
        // int[] nums = { 3, 2, 4 };
        // int target = 6;
        // Output: [1,2]

        // Example 3:
        // int[] nums = { 3, 3 };
        // int target = 6;
        // Output: [0,1]

        // Example 4:
        int[] nums = { 2, 5, 5, 11 };
        int target = 10;
        // Output: [1,2]

        twoSum(nums, target);
    }

    public static int[] twoSum(int[] nums, int target) {
        System.out.println("Original array: " + Arrays.toString(nums));
        System.out.println("Target value: " + target);
        int[] array = new int[2];

        outerloop: for (int i = 0; i < nums.length; i++) {
            System.out.println("i: " + i);
            for (int j = i+1; j < nums.length; j++) {
                System.out.println("j: " + j);
                if (nums[i] + nums[j] == target) {
                    array[0] = i;
                    array[1] = j;
                    break outerloop;
                }
            }
        }
        System.out.println(Arrays.toString(array));
        return array;
    }
}