// from: https://projecteuler.net/problem=381
// For a prime p let S(p) = (∑(p-k)!) mod(p) for 1 ≤ k ≤ 5.

// For example, if p=7,
// (7-1)! + (7-2)! + (7-3)! + (7-4)! + (7-5)! = 6! + 5! + 4! + 3! + 2! = 720+120+24+6+2 = 872.
// As 872 mod(7) = 4, S(7) = 4.

// It can be verified that ∑S(p) = 480 for 5 ≤ p < 100.

// Find ∑S(p) for 5 ≤ p < 108.

// console.log("Hello");
// (3-2) * (3-1) * (3-0)
var p = 5;
// var b = 0;
for (i = 1; i < p; i++) {
    b = (p-i);
    console.log(b);
    g= b*b;
    console.log(g);
}

// console.log(b);
