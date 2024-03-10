// This file is a result of:
// https://trello.com/c/PTiskqY3/1031-study-what-julia-did

// Given a list of integers `nums` and an integer `k`, return `true` if you can remove exactly one element from the list to make the average equal to exactly `k`.

// Example 1
nums = [1, 2, 3, 10];
k = 2;
// Output
// True

// nums = [10,9,8,7];

solve(nums, k);

// class Solution {
function solve(nums, k) {
    let total = nums.length;
    let totalSum = nums.reduce((acc, num) => acc + num)
    let avg = Math.floor(totalSum / total)
    // console.log(totalSum)
    for (let i = 0; i < nums.length; i++) {
        let newAvg = Math.floor((totalSum - nums[i]) / (total - 1))
        // console.log(newAvg);
        if (newAvg === k) {
            return true;
        }
        console.log("total Sum", totalSum);
    }
    return false;
}
// }