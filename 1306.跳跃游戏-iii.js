/*
 * @lc app=leetcode.cn id=1306 lang=javascript
 *
 * [1306] 跳跃游戏 III
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
	let stack = [start];
	let len = arr.length;
	let map = {};
	while (stack.length) {
		let temp = stack.shift();
		if (arr[temp] === 0) return true;
		// 把可能性推入到栈中，在map中判断下是否已经如果栈了
		if (temp + arr[temp] <= len - 1 && !map[temp + arr[temp]]) {
			map[temp + arr[temp]] = 1;
			stack.push(temp + arr[temp]);
		}
		if (temp - arr[temp] >= 0 && !map[temp - arr[temp]]) {
			map[temp - arr[temp]] = 1;
			stack.push(temp - arr[temp]);
		}
	}
	return false;
};
// @lc code=end

