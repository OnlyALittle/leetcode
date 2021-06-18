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
	let i = 0, j = 0;
	let max = 0;
	let map = {};
	let N = s.length;

	while (i < N) {
		const str = s[i];
		let prevIndex = map[str];
		map[str] = i;
		if (prevIndex !== undefined) {
			// 已经存在过了
			max = Math.max(max, i - j);
			j = Math.max(j, prevIndex + 1);
		}
		i++;
	}
	max = Math.max(max, i - j);
	return max
};
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("abba"))
