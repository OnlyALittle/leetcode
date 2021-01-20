var isValidSlow = function(s) {
	let starts = ['(', '[', '{'];
	let ends = [')', ']', '}'];
	let stack = [];
	let strs = s.split('');
	for(let i = 0; i < strs.length; i++) {
		if (starts.includes(strs[i])) {
			stack.push(starts.indexOf(strs[i]));
		} else if ( stack.pop() !== ends.indexOf(strs[i])) {
			return false;
		}
	}
	if (stack.length) {
		return false;
	}
	return true;
};
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let map = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	let stack = [];
	for(let i = 0; i < s.length; i++) {
		let str = s[i];
		if (map[str]) stack.push(str);
		else if ( map[stack[stack.length - 1]] === str) {
			stack.pop();
		} else {
			return false;
		}
	}
	if (stack.length) {
		return false;
	}
	return true;
};
// @lc code=end

console.log(isValid(""))
console.log(isValid("[{"))
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
