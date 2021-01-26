/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	// 动归
	if (s.length === 1) return s;
	
	// 初始化一张表
    var resMap = Array.from(new Array(s.length), () => new Array(s.length));
	let res = s[0];
	function vaildIsPalind(l, r) {
		if (r - l === 0) return true;
		else if (r - l === 1 && s[l] === s[r]) return true;
		else if (s[l] === s[r]) {
			return l+1 === r-1 ? true : resMap[l+1][r-1];
		} else {
			return false;
		}
	}
	for (let i = s.length - 2; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			resMap[i][j] = vaildIsPalind(i, j);
			if (resMap[i][j] && j - i + 1 > res.length ) {
				res = s.slice(i, j+1);
			}
		}
	}
	return res;
};
// @lc code=end

console.log('res:', longestPalindrome('babad'))
console.log('res:', longestPalindrome('cbbd'))
console.log('res:', longestPalindrome('a'))
console.log('res:', longestPalindrome('ac'))
console.log('res:', longestPalindrome('aaaa'))
console.log('res:', longestPalindrome('aacabdkacaa'))