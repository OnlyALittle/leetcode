/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	let h = Object.create(null);
	for(let i = s.length; i--;) {
		let tempS = s[i];
		let tempT = t[i];
		h[tempS] = (h[tempS] || 0) + 1;
		h[tempT] = (h[tempT] || 0) - 1;
	}
	return Object.values(h).every(v => !v)
};

// @lc code=end

isAnagram("anagram", "nagaram")