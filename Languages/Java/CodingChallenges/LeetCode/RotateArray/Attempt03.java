import java.util.Arrays;

public class Attempt03 {
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

    static void rotate(int[] nums, int k) {
        int[] copia = new int[nums.length];

        // copia[0] = nums[(0 + 2 + k) % nums.length];
        // copia[1] = nums[(1 + 2 + k) % nums.length];
        // copia[2] = nums[(2 + 2 + k) % nums.length];
        // copia[3] = nums[(3 + 2 + k) % nums.length];
        // copia[4] = nums[(4 + 2 + k) % nums.length];
        // copia[5] = nums[(5 + 2 + k) % nums.length];

        // copia[0] = nums[(k % nums.length)-4];
        // copia[1] = nums[(k % nums.length)-3];
        // copia[2] = nums[(k % nums.length)-2];
        // copia[3] = nums[(k % nums.length)-1];
        // copia[4] = nums[(k % nums.length)-0];
        // copia[5] = nums[(k % nums.length)-5];

        copia[0] = nums[(k % nums.length)+(0-4)];
        copia[1] = nums[(k % nums.length)+(1-4)];
        copia[2] = nums[(k % nums.length)+(2-4)];
        copia[3] = nums[(k % nums.length)+(3-4)];
        copia[4] = nums[(k % nums.length)+(4-4)];
        copia[5] = nums[(k % nums.length)-5];

        for (int i = 0; i < nums.length; i++) {
            // copia[i] = nums[(i + k) % nums.length];
            // copia[i] = nums[(i + 1 + k) % nums.length];
            // copia[i] = nums[(i + 2 + k) % nums.length];
        }

        // System.out.println("copia:\n" + Arrays.toString(copia));

        for (int i = 0; i < nums.length; i++) {
            nums[i] = copia[i];
        }

        System.out.println("We get (nums):\n" + Arrays.toString(nums));

    }
}