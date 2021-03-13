/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
	if (n <= 3) return n - 1;
	let res = parseInt(n / 3);
	let mod = n % 3;
	
	if (mod === 0) {
		return 3 ** res
	} else if (mod === 1) {
		return 3 ** (res - 1) * (3 + mod);
	} else {
		return 3 ** res * mod
	}
};
// @lc code=end

console.log(integerBreak(2))
console.log(integerBreak(10))