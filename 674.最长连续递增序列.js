/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	let N = nums.length
	if (N === 0) return 0;
	let max = 1;
	let temp = 1;
	for (let i = 1; i < N; i++) {
		if (nums[i] > nums[i - 1]) temp++;
		else {
			max = Math.max(temp, max)
			temp = 1;
		}
	}
	return Math.max(temp, max);
};
// @lc code=end

console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))
console.log(findLengthOfLCIS([1,3,5,7]))