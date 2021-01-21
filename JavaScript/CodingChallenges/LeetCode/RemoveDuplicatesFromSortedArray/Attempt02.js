// Based on the problem statemen we need to remove the duplicate elements from the array, and in the process not generate a second array.

// And then return the length of the array.

// nums = [1, 1, 2];
nums = [1, 1, 2, 3];
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    console.log(nums);
    if (nums.length < 2) return nums.length;

    let i = 0; j = 0;

    for (j = 0; j < nums.length;) {
        if (nums[i] == nums[j + 1]) {
            j++; // j=2 i=0
        } else {
            nums[i + 1] = nums[j + 1];
            j++;
            i++;
        }
    }
    console.log("i=", i, "j=", j, nums);
    return i;
}

removeDuplicates(nums);