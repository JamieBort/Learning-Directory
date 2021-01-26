import java.util.Arrays;

// Cases:
// k=0, nums.lengh =  any size.
// k=any size, nums.length = 2.
// k=any sizse, nums.length = 2.
// 

public class Attempt02 {
    public static void main(String[] args) throws Exception {

        int[] nums = {1,2,3,4,5,6};
        int k =11;
        System.out.println("Want:\n{2,3,4,5,6,1}");

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

        // int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // int k = 3;
        // System.out.println("Want:\n{5, 6, 7, 1, 2, 3, 4}");

        // int[] nums = {-1,-100,3,99};
        // int k = 2;
        // System.out.println("Want:\n{3,99,-1,-100}");

        // int[] nums = {1,2,3};
        // int k = 4;
        // System.out.println("Want:\n{3, 1, 2}");

        System.out.println("original:\n" + Arrays.toString(nums));
        rotate(nums, k);
    }

    static void rotate(int[] nums, int k) {
        // *** Using Two Arrays ***
        if (k > nums.length && nums.length != 1) {
            // System.out.println("k > nums.length. And nums.length != 1.");
            System.out.println("k%nums.length:\n" + k%nums.length);
            System.out.println("6%4:\n" + 6%4);
            System.out.println("6%5:\n" + 6%5);
            System.out.println("6%6:\n" + 6%6);
            int[] copia = new int[nums.length * k]; // make the array bigger than needed. Not sure how big, so we'll use nums.length * k.
            
            copia[0]=nums[1]; // (5+5)
            copia[1]=nums[2]; // 2=6%4
            copia[2]=nums[3];
            copia[3]=nums[4];
            copia[4]=nums[5];
            copia[5]=nums[0];
            // copia[2]=nums[1];
            // copia[3]=nums[nums.length-4];

            // copia[k]=nums[nums.length-1];
            // copia[k-1]=nums[nums.length-2];
            // copia[2]=nums[nums.length-3];
            // copia[3]=nums[nums.length-4];


        System.out.println("copia:\n" + Arrays.toString(copia));

            for (int i = 0; i < nums.length; i++) {
                nums[i] = copia[i];
            }

        } else {
            int[] copy = new int[nums.length];
            for (int i = 0; i < copy.length; i++) {
                copy[i] = nums[(i + (nums.length - k)) % nums.length];
            }
            // System.out.println("We get (copy):\n" + Arrays.toString(copy));
            for (int i = 0; i < nums.length; i++) {
                nums[i] = copy[i];
            }
        }
        System.out.println("We get (nums):\n" + Arrays.toString(nums));

    }
}