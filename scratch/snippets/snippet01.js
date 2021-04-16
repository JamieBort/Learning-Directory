// function solve(s0, s1) {
//     if (!s1 && !s0) return false;
//     if (!s0 && s1) return false;
//     if (!s1 && s0.length === 1) return true;

//     let obj1 = {};

//     for (const s of s1) {
//         obj1[s] = ++obj1[s] || 1;
//     }

//     for (const s of s0) {
//         if (s in s0) {
//             obj1[s]--
//             if (obj1[s] === 0) {
//                 delete obj1[s];
//             }
//         } else {
//             obj1[s] = 1;
//         }
//     }
// }

// let str="a string";
// let str=undefined;
let str=null;
if(!str) console.log("nope");

        // obj1[s] = ++obj1[s] || 1;