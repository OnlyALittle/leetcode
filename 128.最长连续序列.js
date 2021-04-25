/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
	let N = nums.length
	let map = {}
	for (const num of nums) {
		map[num] = 1;
	}

	let max = 0;
	for (let i = 0; i < N; i++) {
		let num = nums[i]
		// 没有头，才开始向下取,这样只有头部的才会走while逻辑
		if (!map[num - 1]) {
			let t = 1;
			while (map[++num]) t++;

			max = Math.max(t, max);
		}
	}
	return max;
};
// @lc code=end

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))



