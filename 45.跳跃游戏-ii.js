/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let dp = new Array(nums.length);
	dp[0] = 0;
	// 记录到数组下标时的最小跳数

	for(let i = 0; i < nums.length; i++) {
		// 该数组下标不能到达，跳过
		if (dp[i] === undefined) continue;
		let maxStep = i + nums[i];
		let j = i + 1;
		// 循环该节点可以往后跳的所以节点，计算最小跳数
		while (j <= maxStep && j < nums.length) {
			dp[j] = Math.min(dp[i] + 1, dp[j] || Infinity)
			j++;
		}
	}
	return dp[nums.length - 1] !== undefined ? dp[nums.length - 1] : 0

};
// @lc code=end

console.log(jump([2,3,1,1,4]))
console.log(jump([1,1,1,1,1]))