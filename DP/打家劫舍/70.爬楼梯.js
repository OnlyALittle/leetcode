/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	let x1 = 0;
	let x2 = 0;
	let res = 1

	for(let i = 1; i <= n; i++) {
		x1 = x2;
        x2 = res;
        res = x1 + x2;
	}

	return res;
};
// @lc code=end

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))