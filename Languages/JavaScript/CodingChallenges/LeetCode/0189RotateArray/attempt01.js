nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
// Output: [5, 6, 7, 1, 2, 3, 4]

// (nums = [-1, -100, 3, 99]), (k = 2);
// Output: [3,99,-1,-100]

var rotate = function (nums, k) {
  var index = 0;
  while (index < k) {
    nums.splice(0, 0, nums.pop());
    index++;
  }
  return nums;
};
console.log(rotate(nums, k));
