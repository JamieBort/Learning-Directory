// This file is a result of:
// https://trello.com/c/PTiskqY3/1031-study-what-julia-did

// Given a lowercase alphabet string s, return the index of the first recurring character in it. If there are no recurring characters, return -1.

// Example 1
// Input
// s = "abcda";
// Output
// 4

s = "abada";

console.log(solve(s));

// let seven = console.log(7);
// let notseven = console.log(!7);


// class Solution {
function solve(s) {
    // let counter = { a: 7, g: 2, v: 3 };
    let counter = {};
    for (let i = 0; i < s.length; i++) {
        // let f = 7;
        // let seven = console.log(f);
        // let notseven = console.log(!f);
        let count = counter[s[i]];
        // console.log(count);
        let notcount = !counter[s[i]];
        // console.log(notcount);
        if (!counter[s[i]]) {
            counter[s[i]] = 1
        } else {
            return i
        }
    }
    return -1
}
// }