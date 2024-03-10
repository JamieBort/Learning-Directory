public class Attempt02 {
    public static void main(String[] args) throws Exception {

        // Example 1:
        // int[] nums = { 2, 7, 11, 15 };
        // int target = 9;
        // Output: [0,1]
        // Output: Because nums[0] + nums[1] == 9, we return [0, 1].

        // Example 2:
        int[] nums = { 3, 2, 4 };
        int target = 6;
        // Output: [1,2]

        twoSum(nums, target);
    }

    public static int[] twoSum(int[] nums, int target) {
        // for (int i = 0; i < 10; i++) {
        // if (i == 4) {
        // break;
        // }
        // System.out.println(i);
        // }

        for (int i = 0; i < nums.length; i++) {
            for (int j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    System.out.println("yippie");
                    System.out.println("i: " + i);
                    System.out.println("j: " + j);
                }
            }
        }

        // for (int i : nums) {
        // System.out.println("i: "+i);
        // while (j < nums.length) {
        // System.out.println("j: "+ j);
        // System.out.println("i+j: "+ i + j);
        // if (i + nums[j] != target) {
        // j++;
        // // System.out.println("nope");
        // // System.out.println("j: "+ j);
        // // System.out.println("i: "+i);
        // // break;
        // } else {
        // // System.out.println("else");
        // System.out.println("yippie");
        // }
        // }
        // }

        return nums;
    }
}