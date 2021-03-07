/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	let prev = 0;
	let next = 0;

	while (next < t.length && prev < s.length) {
		if (s[prev] === t[next]) {
			prev ++;
		}
		next++;
	}
	if (prev > s.length - 1) {
		return true;
	} else {
		return false;
	}
 };
// @lc code=end

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence('abc', 'ahbgde'))