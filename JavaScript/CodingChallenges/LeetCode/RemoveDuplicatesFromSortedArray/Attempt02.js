// Based on the problem statemen we need to remove the duplicate elements from the array, and in the process not generate a second array.

// And then return the length of the array.

nums = [1, 1, 2];
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    console.log(nums);
    if (nums.length < 2) return nums.length;

    let i = 0;
    let j = 0;

    if (nums[i] == nums[j + 1]) {
        j++;
    } else {
        // console.log("do nothing");
        j++;
        i++;
    }

    if (nums[i] == nums[j + 1]) {
        //     j++;
    } else {
        nums[1] = nums[2];
        j++;
        i++;
    }
    console.log("i=",i,"j=",j,nums);
}

removeDuplicates(nums);