# Notes

Shared with me via Slack from Diana.

/**
 * @param {number[]} nums
 * @return {number}

 */

var removeDuplicates = function(nums) {
    for(let i = 0;i< nums.length;){
        if(nums[i]==nums[i+1]){
           nums = nums.slice(i+1);
        }
        else
            i++;
    }
  console.log(nums.length);
    return nums;
};

/**
 * @param {number[]} nums
 * @return {number}

 */
 
var removeDuplicates = function(nums) {
    for(let i = 0;i< nums.length;){
        if(nums[i]==nums[i+1]){
           nums = nums.slice(i+1);
        }
        else
            i++;
    }
  console.log(nums.length);
    return nums;
};

https://leetcode.com/problems/remove-duplicates-from-sorted-array/


Your input
[1,1,2,4,4]
stdout
[ 4 ]
Output
[1,1,2,4]
DiffExpected
[1,2,4]