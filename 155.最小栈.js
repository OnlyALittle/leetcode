/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.val = [];
	this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	this.val.push(val);
	let N = this.min.length;
	N > 0 ? this.min.push(
		Math.min(this.min[N - 1], val)
	) : this.min.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.val.pop(this.val);
	this.min.pop(this.val);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.val[this.val.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.min[this.min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // --> 返回 -3.
minStack.pop();
console.log(minStack.top());      // --> 返回 0.
console.log(minStack.getMin());   // --> 返回 -2.