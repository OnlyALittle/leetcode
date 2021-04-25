/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
	let ACode = 'A'.charCodeAt(0)
	const mod = (num) => {
		if (num <= 26) return [num];
		if (num % 26 === 0) {
			return mod(num / 26 - 1).concat([26])
		}
		return mod(parseInt(num / 26)).concat([num % 26])
	}
	let t = mod(columnNumber)
	return t.map(item => String.fromCharCode(ACode + item - 1)).join('')
};
// @lc code=end

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))
