/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let N = nums.length;
	let i = 0, j = N - 1;
	let first = nums[0];
	if (first === target) return 0
	while (i <= j) {
		let mid = Math.floor((j - i) / 2) + i;
		let midNum = nums[mid]
		if (midNum === target) return mid;

		if (first > target) {
			// 在左侧的区间内
			if(midNum < first) {
				// 这个中间值在右侧
				if (midNum < target) i = mid + 1;
				else j = mid - 1;
			} else {
				i = mid + 1;
			}
		} else {
			// 在右侧的区间内
			if(midNum >= first) {
				// 这个中间值也在左侧
				if (midNum < target) i = mid + 1;
				else j = mid - 1;
			} else {
				j = mid - 1;
			}
		}
	}
	return -1
};
// @lc code=end

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))
console.log(search([4, 5,1,3], 5))
console.log(search([4,5,6,7,8,1,2,3], 8))