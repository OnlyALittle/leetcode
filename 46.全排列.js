/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
	let data = [];
	if (nums.length === 1) return [nums];

	nums.forEach((item, index) => {
		let temp = permute(nums.slice(0, index).concat(nums.slice(index + 1, nums.length)))
		let tempData = temp.map(tItem => {
			tItem.unshift(item)
			return tItem;
		})
		data = data.concat(tempData);
	})
	return data;
};
// @lc code=end

