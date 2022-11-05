# 0523 Continuous Subarray Sum

## Status

Not done.
Close.

## Problem

### Problem URl

https://leetcode.com/problems/continuous-subarray-sum/

### Problem Statement

```

**Given** an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1

 ```

## Directories and Files

### Directories

Directory01/ - Doesn't exist.

### Files

attempt01.js - The file used for the first attempt at solving the problem.

attempt02.js - The file used for the second attempt at solving the problem.

attempt03.js - The file used for the third attempt at solving the problem. All five examples in it passed. However when I submitted it in Leetcode, I received a `Time Limit Exceeded` response and `94 / 97 testcases passed`.

attempt04.js - 

README.md - this file.