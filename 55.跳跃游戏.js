/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let max = 0
	for(let i = 0; i < nums.length; i++) {
		if (i > max) return false;
		max = Math.max(max, i + nums[i]);
	}
	return true
};
// @lc code=end

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([0]))
console.log(canJump([1, 2]))