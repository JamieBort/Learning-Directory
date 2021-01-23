// nums = [1, 2, 3, 4, 5, 6, 7]
// k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

nums = [-1,-100,3,99], 
k = 2
// Output: [3,99,-1,-100]

var rotate = function (nums, k) {
    var i= 0; 
    while (i < k) {
        nums.splice(0, 0, nums.pop());
        i++;
    }
    return nums;
};
console.log(rotate(nums, k));












// var rotate = function (nums, k) {
//     // console.log(nums);
//     var newArray = [];
//     for (let index = 0; index < nums.length; index++) {
//         newArray.push(nums[(index + k + 1) % nums.length]);
//         // console.log(newArray);   
//     }
//     console.log(newArray);
//     return (newArray);
// };