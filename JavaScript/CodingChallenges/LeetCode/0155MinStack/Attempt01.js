// Attempt01.js

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// var myArray = [2,3];
// console.log(myArray);

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.min = [];
  this.stack = [];
  // return [1,9,8,9,9,9];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // * push(x) -- Push element x onto stack.
  this.stack.push(x);
  // console.log("pushing");
  // console.log(x);
  console.log(this.stack);
  // return this.stack;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // * pop() -- Removes the element on top of the stack.
  this.stack.pop();
  console.log(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // * top() -- Get the top element.
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // * getMin() -- Retrieve the minimum element in the stack.
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
console.log(obj);
// console.log(obj.push(60));
obj.push(60);
obj.push(61);
obj.pop();
