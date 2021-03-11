/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
	let N = nums.length
	let sum = nums.reduce((prev, cur) => {
		return prev + cur;
	}, 0) 
	if (Math.abs(S) > Math.abs(sum)) return 0;
	let s = Math.abs(sum); // 最大数组范围

	let dep = Array.from(new Array(N+1), () => {
		let arr = new Array(s*2 + 1).fill(0);
		return arr
	})
	// 只考虑第一项时，正负的两个刚好是1
	// 这边为什么第二项要用+=1，时考虑了0的时候，+0，-0是两种可能
	dep[0][s + nums[0]] = 1;
	dep[0][s - nums[0]] += 1;
	
	for(let i = 1; i < N; i++) {
		let cur = nums[i];
		for(let j = 0; j <= 2*s; j++) {
			let left = dep[i - 1][j - cur] || 0;
			let right = dep[i - 1][j + cur] || 0;
			dep[i][j] = left + right;
		}
	}
	return dep[N - 1][S + sum]

};
// @lc code=end

// console.log(findTargetSumWays([1, 2, 3, 4, 5], 8))
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
console.log(findTargetSumWays([1], 2))
console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1))