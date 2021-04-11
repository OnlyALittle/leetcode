/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let N = strs.length;
	if (N === 0) return '';
	let M = strs[0].length;

	for (let i = 0; i < M; i++) {
		let first = strs[0][i];
		j = 1;
		while (j < N) {
			let temp = strs[j][i];
			if (temp !== first) {
				return strs[0].substring(0, i);
			}
			j++;
		}
	}
	return strs[0]
};
// @lc code=end

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
