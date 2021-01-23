import java.util.Arrays;

public class Attempt01 {
    public static void main(String[] args) throws Exception {
        // int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // int k = 3;
        // Output: [5,6,7,1,2,3,4]

        // int[] nums = [-1,-100,3,99];
        // int k = 2;
        // Output: [3,99,-1,-100]

        // rotate(nums, k);
        // String[] array = new String[] { "John", "Mary", "Bob" };
        // System.out.println("\n" + Arrays.toString(array));
        // System.out.println(Arrays.toString({5,6,7,1,2,3,4}));
        System.out.println((0+4)%7);
        System.out.println((5+4)%7);
        System.out.println((6+4)%7);
        System.out.println((7+4)%7);
    }

    static void rotate(int[] nums, int k) {
        // System.out.print(k + "\n");

        // Using Two Arrays
        int[] copy = new int[nums.length];
        // copy[0]=nums[4];
        // copy[1]=nums[5];
        // copy[2]=nums[6];
        // copy[3]=nums[7];
        // copy[4]=nums[0];
        // copy[5]=nums[1];
        // copy[6]=nums[2];
        // copy[7]=nums[3];

        // copy[0]=nums[(i+4)%7];
        // copy[1]=nums[5];
        // copy[2]=nums[6];
        // copy[3]=nums[7];
        // copy[4]=nums[0];
        // copy[5]=nums[1];
        // copy[6]=nums[2];
        // copy[7]=nums[3];

        // int i = 0;
        // copy[i+0]=nums[i+4];
        // copy[i+1]=nums[i+5];
        // copy[i+2]=nums[i+6];
        // copy[i+3]=nums[i+7];
        // copy[i+4]=nums[i+0];
        // copy[i+5]=nums[i+1];
        // copy[i+6]=nums[i+2];
        // copy[i+7]=nums[i+3];



        // int[] copy = new int[nums.length - 1];
        // for (int i = 0, j = 0; i < nums.length; i++) {
        //     if (i != k) {
        //         copy[j++] = nums[i];
        //     }
        // }
        // System.out.println("\n" + Arrays.toString(copy));



        // Using a for loop

    }
}