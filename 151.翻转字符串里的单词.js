var reverseWords1 = function(s) {
	let N = s.length;
	let i = 0;
	let res = '';
	while (s[i] == ' ') {
		i++;
	}
	let prev = s[i];
	i++;
	while (i < N) {
		let t = s[i];
		if (
			(prev === ' ' && t !== ' ') ||
			(prev !== ' ' && t === ' ')
		) {
			res = `${prev}${res}`;
			prev = t;
		} else if (prev !== ' ' && t !== ' ') {
			prev += t;
		}
		i++;
	}
	if (prev !== ' ')
		res = `${prev}${res}`;
	return res;
};
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	return s.split(' ').filter(item => item ).reverse().join(' ')
};
// @lc code=end

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))
console.log(reverseWords("a good   example"))
console.log(reverseWords("Alice does not even like bob"))