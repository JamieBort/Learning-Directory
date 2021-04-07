// import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
        // int[] num = {2,7,11,15};
        // twoSum(num, 9);

        int[] num = {3,2,4};
        twoSum(num, 6);
    }

    public static int[] twoSum(int[] nums, int target){
        int[] indexArray = new int[2]; // Declare an array with two elements.
        int check;
        indexArray[0]=-1; // In case we never enter the if statement below
        indexArray[1]=-1; // this method will return an array with -1 for both elements.
        int secondIterator = 0;
        while (secondIterator < nums.length){
            System.out.println("secondIterator: " + secondIterator); // Not needed for the exercise.
            for(int index = secondIterator; index < nums.length-1; index++){
                System.out.println(nums[index]); // Not needed for the exercise.
                check =nums[secondIterator] + nums[index];
                // if(check == target){
                //     // System.out.println(secondIterator); // Not needed for the exercise.
                //     // System.out.println(index); // Not needed for the exercise.
                //     indexArray[0]=secondIterator;
                //     indexArray[1]=index;
                //     // System.out.println("check == target"); // This tells me that the sum of two elements equals the target value. // Not needed for the exercise.
                //     return indexArray; // No need to continue this process. We can return a value right now.
                // }
            }
            secondIterator++;
        }
        return indexArray;
    }
}
