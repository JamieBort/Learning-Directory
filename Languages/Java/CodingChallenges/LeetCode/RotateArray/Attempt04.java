import java.util.Arrays;

public class Attempt04 {
    public static void main(String[] args) throws Exception {

        // int[] nums = { 1 };
        // int k = 10;
        // System.out.println("Want:\n{1}");

        // 0
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

        // 1
        // int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // int k = 3;
        // System.out.println("Want:\n{5, 6, 7, 1, 2, 3, 4}");

        // int[] nums = {1,2,3};
        // int k = 4;
        // System.out.println("Want:\n{3, 1, 2}");

        // 2
        int[] nums = { 1, 2, 3, 4, 5, 6 };
        int k = 11;
        System.out.println("Want:\n{2, 3, 4, 5, 6, 1}");

        System.out.println("original:\n" + Arrays.toString(nums));
        rotate(nums, k);

    }

    // public void rotate(int[] nums, int k) {
    static void rotate(int[] nums, int k) {

        if (nums == null || nums.length < 2) {
            return;
        }

        k = k % nums.length;
        reverse(nums, 0, nums.length - k - 1);
        reverse(nums, nums.length - k, nums.length - 1);
        reverse(nums, 0, nums.length - 1);
        
        System.out.println("RESULT:\n" + Arrays.toString(nums));

    }

    // private void reverse(int[] nums, int i, int j){
    static void reverse(int[] nums, int i, int j) {
        int tmp = 0;
        while (i < j) {
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
            j--;
        }
    }

}
