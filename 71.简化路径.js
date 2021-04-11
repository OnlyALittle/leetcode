/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	let arr = path.split('/');
	let stack = [];
	let N = arr.length,
		i = 0;
	while (i < N) {
		let t = arr[i];
		if (t === '..') {
			stack.pop();
		} else if (t !== '' && t !== '.'){
			stack.push(t);
		}
		i++;
	}
	return `/${stack.join('/')}`
};
// @lc code=end

console.log(simplifyPath("/home/"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))
