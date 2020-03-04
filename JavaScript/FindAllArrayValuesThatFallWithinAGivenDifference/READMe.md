from: https://www.codewars.com/kata/find-all-array-values-that-fall-within-a-given-difference/javascript

You will be given an array of values.

For simplicity sake you can assume that all the numbers will be non-negative integers.

The goal is to create a class that handles finding all the values in the array that are within a given range of each other.

Return the final values in ascending order.

For Example
Given
[5, 32, 5, 1, 31, 70, 30, 8]
and you want to know all the values that fall within a difference of 2 of each other:

Should Return
[5,5,30,31,32]
If an empty array is given, then an empty array should be returned regardless of the value passed in.

Example solution call...

GroupByDifference.new([5, 32, 5, 1, 31, 70, 30, 8]).find(3) #=> [5,5,8,30,31,32]