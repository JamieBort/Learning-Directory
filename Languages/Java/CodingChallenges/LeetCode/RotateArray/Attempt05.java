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

        // int[] nums = { 1, 2, 3 };
        // int k = 4;
        // System.out.println("Want:\n{3, 1, 2}");

        int[] nums = { 1, 2, 3, 4, 5, 6 };
        int k = 11;
        System.out.println("Want:\n{2, 3, 4, 5, 6, 1}");

        System.out.println("original:\n" + Arrays.toString(nums));
        rotate(nums, k);

    }

    static void rotate(int[] nums, int k) {

        if (nums == null || nums.length < 2) {
            return;
        }
        System.out.println("k before:\n" + k);
        k = k % nums.length;
        System.out.println("k after:\n" + k);

        int tmpInt;
        int t = 0; // five times this time
        while(t<k){


            // ************
            // ************
            // *** this is a NOT YET working solution for all cases ***
            tmpInt = nums[0];
            nums[(k-t)%k] = nums[k-t];
            // nums[5] = nums[4];
            // nums[4] = nums[3];
            // nums[3] = nums[2];
            // nums[2] = nums[1];
            // nums[1] = tmpInt;
            t++;

            // ************
            // ************
            // *** this is a WORKING solution that is hard coded for int[] nums = { 1, 2, 3, 4, 5, 6 }; and int k = 11; ***
            // tmpInt = nums[0];
            // nums[0] = nums[5];
            // nums[5] = nums[4];
            // nums[4] = nums[3];
            // nums[3] = nums[2];
            // nums[2] = nums[1];
            // // nums[1] = tmpInt;
            // t++;
            // nums[1] = tmpInt;

        }

        System.out.println("RESULT:\n" + Arrays.toString(nums));

        

            // ************
            // ************
            // *** this is a WORKING solution that uses a temporary array. ***
        // int t = 0;
        // while (t<nums.length){}

        // int[] tmpArray = new int[nums.length];
        // int t = 0;
        // while (t<nums.length){
        // tmpArray[(k+t)%nums.length]=nums[t];
        // t++;
        // }
        // System.out.println("tmpArray:\n" + Arrays.toString(tmpArray));
    }
}
