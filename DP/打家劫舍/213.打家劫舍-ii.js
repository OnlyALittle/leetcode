/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	// Math.max(
	// 	不取第一个元素的最大值，
	// 	不取最后一个元素的最大值
	// );
	if (nums.length <= 1) return nums[0]
	else if (nums.length == 2) return Math.max(nums[0], nums[1])

	function getMax(start, end) {
		let first = nums[start], 
			second = Math.max(nums[start+1], first);

			for(let i = start+1; i < end; i ++) {
				let temp = second;
				second = Math.max(second, first + nums[i+1]);
				first = temp;
			}
		return second;
	}
	let prev = getMax(0, nums.length - 2);
	let next = getMax(1, nums.length - 1);
	return Math.max(prev, next)
};
// @lc code=end

console.log(rob([100]))
console.log(rob([2,3,2]))
console.log(rob([1,2,3,1]))
console.log(rob([3,2,5,7, 1]))