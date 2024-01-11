// Attempt01.js

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // this.min = [];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  console.log("Pushed. The stack:", this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  console.log("Popped. The stack:", this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // * top() -- Get the top element.
  const top = this.stack[this.stack.length - 1];
  console.log("The top:", top);
  return top;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // * getMin() -- Retrieve the minimum element in the stack.
  const min = Math.min(...this.stack);
  console.log("The min:", min);
  return min;
  return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
console.log(obj);
// console.log(obj.push(60));
obj.push(60);
obj.push(61);
obj.getMin();
obj.pop();
