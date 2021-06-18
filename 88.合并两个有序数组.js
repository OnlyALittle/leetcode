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
	let countAll = m + n - 1;
	let nIndex = n - 1;
	let mIndex = m - 1;
	while (countAll >= 0 && nIndex >= 0) {
		let mStr = nums1[mIndex];
		let nStr = nums2[nIndex];
		if (mStr > nStr) {
			nums1[countAll] = mStr;
			mIndex--;
		} else {
			nums1[countAll] = nStr;
			nIndex--;
		}
		countAll --;
	}
};
// @lc code=end

let nums = [1,2,3,0,0,0];
let nums2 = [1];
merge(nums, 3, [2,5,6], 3)
merge(nums2, 1, [], 0)
console.log(nums)
console.log(nums2)


var merge = function(nums1, m, nums2, n) {
	let countAll = m + n - 1;
	while (m > 0 || n > 0) {
		let mStr = nums1[m - 1] || -Infinity;
		let nStr = nums2[n - 1] || -Infinity;
		if (mStr > nStr) {
			nums[countAll - 1] = mStr;
			m--;
		} else {
			nums[countAll - 1] = nStr;
			n--;
		}
	}
};