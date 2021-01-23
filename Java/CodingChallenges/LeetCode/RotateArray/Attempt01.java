import java.util.Arrays;

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        int k = 3;
        // Output: [5,6,7,1,2,3,4]

        // int[] nums = {-1,-100,3,99};
        // int k = 2;
        // Output: [3,99,-1,-100]

        rotate(nums, k);
    }

    static void rotate(int[] nums, int k) {
        // *** Using Two Arrays ***
        // int[] copy = new int[nums.length];
        // for (int i = 0; i < copy.length; i++) {
        //     copy[i]=nums[(i+(nums.length-k))%nums.length];
        // }
        // System.out.println("\n" + Arrays.toString(copy));

        // *** Using a for loop (just a for loop) ***
        for (int i = 0; i < nums.length; i++) {
            nums[i]=nums[(i+(nums.length-k))%nums.length];
        }
        System.out.println("\n" + Arrays.toString(nums));

    }
}