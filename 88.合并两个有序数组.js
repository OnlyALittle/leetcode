/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let cur = m + n - 1
	let i = m - 1;
	let j = n - 1;

	while (cur >= 0 && j>=0) {
		let item1 = nums1[i]
		let item2 = nums2[j]

		if (item1 > item2) {
			nums1[cur] = item1;
			i --;
		} else {
			nums1[cur] = item2;
			j --;
		}
		cur--;
	}
};
// @lc code=end

let nums = [1,2,3,0,0,0];
let nums2 = [1];
merge(nums, 3, [2,5,6], 3)
merge(nums2, 1, [], 0)
console.log(nums)
console.log(nums2)