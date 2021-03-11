/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	let N = nums.length;
	if(N <= 1) return nums[0] || 0;
	let first = nums[0], second = Math.max(nums[0], nums[1])
	for (let i = 2; i < N; i++) {
		let temp = second;
		second = Math.max(first + nums[i], second);
		first = temp;
	}
	return second
};
// @lc code=end

console.log(rob([2,7,9,3,1]))