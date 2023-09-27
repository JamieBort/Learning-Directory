# K-Messed Array Sort

The purpose of this directory is to house the code for this [K-Messed Array Sort](https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnBZ) coding challenge.

### Status

I didn't finish it.

### Next Steps

1. Finish it.

2. Then study the `solution` given. A link was not provided. There might be something there to learn from.

## Problem

### Problem URL

https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnBZ

### Problem Statement

Given an array of integers `arr` where each element is at most `k` places away from its sorted position, code an efficient function `sortKMessedArray` that sorts `arr`. For instance, for an input array of size `10` and `k = 2`, an element belonging to index `6` in the sorted array will be located at either index `4`, `5`, `6`, `7` or `8` in the input array.

Analyze the time and space complexities of your solution.

Example:

```
input: arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Constraints:

- [time limit] 5000ms

- [input] array.integer arr

  - 1 ≤ arr.length ≤ 100

- [input] integer k

  - 0 ≤ k ≤ 20

- [output] array.integer

### Hints & Tips

Your peer may be tempted to use a standard sorting algorithm such as quicksort or mergesort. However, doing so ignores the fact that the array is nearly-sorted (k-sorted) and yields suboptimal solutions.
If your peer is stuck, ask them how the fact the array is k-sorted can help divide the array into smaller overlapping chunks (windows) and then sort them in an iterative way.
This question is a good opportunity to check if your peer remembers Insertion Sort and Heapsort. In general, it’s an opportunity for both of you to brush up on these sorting algorithms. A good source to refresh your memory is the Sorting Algorithm Article on Wikipedia.
Watch out for correct calculations and usage of array indices.
If your peer can’t think of a solution, help their thought process by asking what they can do with a sliding window of size k+1.
