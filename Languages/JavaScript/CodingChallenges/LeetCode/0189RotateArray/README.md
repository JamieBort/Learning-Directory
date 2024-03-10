# Rotate Array

## Status

I think I have the correct answer.
I am getting `[5,6,7,1,2,3,4]`
But Leetcode is telling me that

```
Output
[1,2,3,4,5,6,7]
Expected
[5,6,7,1,2,3,4]
```

See this [leetcode correct answer but not working](https://www.google.com/search?q=leetcode+correct+answer+but+not+working&sxsrf=ALiCzsbxLgtg0R2FD_KstBB9WN05Xf-BiQ%3A1666822220818&ei=TLBZY6nKMY3DqtsPm96gqAI&oq=leetcode+correct+answer+but&gs_lcp=Cgdnd3Mtd2l6EAMYATIFCCEQoAEyBQghEKABOgoIABBHENYEELADOgUIABCRAjoLCAAQsQMQgwEQkQI6CggAEIAEEIcCEBQ6EAgAEIAEEIcCELEDEIMBEBQ6BQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BggAEBYQHjoFCAAQhgM6BQghEKsCSgQITRgBSgQIQRgASgQIRhgAUNgIWJ4hYOYvaAJwAXgAgAGmAYgBzhGSAQQwLjE4mAEAoAEByAEIwAEB&sclient=gws-wiz) internet search.

Completed. But needs to improve on runtime.
Details
Runtime: 120 ms, faster than 30.50% of JavaScript online submissions for Rotate Array.
Memory Usage: 40.3 MB, less than 15.82% of JavaScript online submissions for Rotate Array.

## Problem

### Problem URl

[Rotate Array](https://leetcode.com/problems/rotate-array/)

https://leetcode.com/problems/rotate-array/

### Problem Statement

```
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

* Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
* Could you do it in-place with O(1) extra space?


### Example 1:
```

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

```
### Example 2:
```

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

```

### Constraints:

* 1 <= nums.length <= 2 * 10^4
* It's guaranteed that nums[i] fits in a 32 bit-signed integer.
* k >= 0

```

## Directories and Files

### Directories

Directory01/ - None yet. ~~list the contents of this directory. it's purpose, etc.~~

Directory02/ - None yet. ~~list the contents of this directory. it's purpose, etc.~~

### Files

attempt01.js - Response: "Time Limit Exceeded 37 / 38 testcases passed"

attempt02.js - Completed.

attempt03.js - Copy of attempt02.js but cleaned up.

attempt04.js -

README.md - this file.
