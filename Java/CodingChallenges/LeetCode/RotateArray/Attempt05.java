import java.util.Arrays;

public class Attempt05 {
    public static void main(String[] args) throws Exception {

        // int[] nums = { 1 };
        // int k = 10;
        // System.out.println("Want:\n{1}");

        // int[] nums = { 1, 2 };
        // int k = 0;
        // System.out.println("Want:\n{1, 2}");

        // int[] nums = { 1, 2 };
        // int k = 2;
        // System.out.println("Want:\n{1, 2}");

        // int[] nums = { 1, 2 };
        // int k = 3;
        // System.out.println("We want:\n{2, 1}");

        // int[] nums = { -1, -100, 3, 99 };
        // int k = 2;
        // System.out.println("Want:\n{3, 99, -1, -100}");

        // int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // int k = 3;
        // System.out.println("Want:\n{5, 6, 7, 1, 2, 3, 4}");

        int[] nums = {1,2,3};
        int k = 4;
        System.out.println("Want:\n{3, 1, 2}");

        // int[] nums = { 1, 2, 3, 4, 5, 6 };
        // int k = 11;
        // System.out.println("Want:\n{2, 3, 4, 5, 6, 1}");

        System.out.println("original:\n" + Arrays.toString(nums));
        rotate(nums, k);

    }

    static void rotate(int[] nums, int k) {

        if (nums == null || nums.length < 2) {
            return;
        }
        System.out.println("k before:\n" + k);
        k = k % nums.length;
        System.out.println("k before:\n" + k);

        int[] tmpArray = new int[nums.length];
        int t = 0;
        while (t<nums.length){
            tmpArray[(k+t)%nums.length]=nums[t];
            t++;
        }

        System.out.println("tmpArray:\n" + Arrays.toString(tmpArray));

        // System.out.println("RESULT:\n" + Arrays.toString(nums));

    }
}
