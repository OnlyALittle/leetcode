/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	// 比较同字母第一次出现的位置
	for (let index = 0; index < s.length; index++) {
		if (s.indexOf(s[index]) !== t.indexOf(t[index]))
			return false;
	}
	return true
};
// @lc code=end

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))
console.log(isIsomorphic('badc', 'baba'))
