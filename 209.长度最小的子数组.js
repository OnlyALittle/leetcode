/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
	let f = 0, s = 0;
	let tempMax = 0;
	let N = nums.length
	let minLen = N;

	while (f < N) {
		let rightItem = nums[f];
		tempMax = tempMax + rightItem;
		if (tempMax >= target) {
			while (tempMax - nums[s] >= target) tempMax = tempMax - nums[s++];
			minLen = Math.min((f - s + 1), minLen)
		}
		f++;
	}  
	if (tempMax >= target)
		return minLen;
	else 
		return 0;
};
// @lc code=end

