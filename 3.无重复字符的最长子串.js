/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let i = 0,
		j = 0;
	let map = {};
	let max = 0;

	while (j < s.length) {
		let str = s[j];
		let prevIndex = map[str];
		map[str] = j
		if (prevIndex !== undefined) {
			max = Math.max(max, j - i)
			i = Math.max(i, prevIndex + 1);
		}
		j++;
	}
	max = Math.max(max, j - i)
	return max;
};
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("abba"))