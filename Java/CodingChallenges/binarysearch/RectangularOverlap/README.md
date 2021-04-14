# RectangularOverlap

from: https://binarysearch.com/problems/Rectangular-Overlap

## Status

## Problem Statement

### Rectangular Overlap

You are given two lists of integers `rect0` and `rect1` representing coordinates `(x0, y0, x1, y1)` of two rectangles. `(x0, y0)` is the bottom left coordinate and `(x1, y1)` is the upper right coordinate.

Return whether the two rectangles overlap.

Note: if two rectangles touch only in their perimeters, they don't overlap.

**Example 1**

Input
```
rect0 = [0, 0, 10, 10]
rect1 = [10, 10, 30, 30]
```
Output
```
false
```

**Example 2**
Input
```
rect0 = [0, 0, 10, 10]
rect1 = [5, 5, 30, 30]
```
Output
```
true
```