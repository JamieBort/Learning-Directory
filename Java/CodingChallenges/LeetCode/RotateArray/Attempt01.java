import java.util.Arrays;

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        int[] nums = {1, 2};
        int k = 0;
        System.out.println("Want:\n{1,2}");

        // int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // int k = 3;
        // System.out.println("Want:\n{5,6,7,1,2,3,4}");

        // int[] nums = {-1,-100,3,99};
        // int k = 2;
        // System.out.println("Want:\n{3,99,-1,-100}");

        rotate(nums, k);
    }

    static void rotate(int[] nums, int k) {
        // *** Using Two Arrays ***
        if (nums.length < 3 && nums.length > 1) {
            System.out.println("The array is size 2.");
            int a = nums[0];
            nums[0] = nums[1];
            nums[1] = a;
            // System.out.println("\n" + Arrays.toString(nums));
        } else {
            int[] copy = new int[nums.length];
            for (int i = 0; i < copy.length; i++) {
                copy[i] = nums[(i + (nums.length - k)) % nums.length];
            }
            for (int i = 0; i < copy.length; i++) {
                nums[i] = copy[i];
            }
            // System.out.println("\n" + Arrays.toString(copy));
        }
        System.out.println("\n" + Arrays.toString(nums));


        // *** Using a for loop (just a for loop) ***
        // for (int i = 0; i < nums.length; i++) {
        // nums[i]=nums[(i+(nums.length-k))%nums.length];
        // }
        // System.out.println("\n" + Arrays.toString(nums));

        // nums[0]=nums[(0+(nums.length-k))%nums.length];
        // nums[1]=nums[(1+(nums.length-k))%nums.length];
        // nums[2]=nums[(2+(nums.length-k))%nums.length];
        // // nums[3]=nums[(3+(nums.length-k))%nums.length];
        // // nums[4]=nums[(4+(nums.length-k))%nums.length];
        // // nums[5]=nums[(5+(nums.length-k))%nums.length];
        // // nums[6]=nums[(6+(nums.length-k))%nums.length];

        // System.out.println("\n" + Arrays.toString(nums));

    }
}