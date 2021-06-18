/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	let i = num1.length - 1;
	let j = num2.length - 1;
	let str = '';
	let count = 0;

	while (i >= 0 || j >= 0) {
		let iS = +num1[i] || 0
		let jS = +num2[j] || 0
		let val = iS + jS + count;
		count = parseInt(val / 10);
		str += (val % 10)
		i--;
		j--;
	}
	if (count) str += count;
	return str.split('').reverse().join('');
};
// @lc code=end

