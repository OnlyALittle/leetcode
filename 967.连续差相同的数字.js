/*
 * @lc app=leetcode.cn id=967 lang=javascript
 *
 * [967] 连续差相同的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
	
	let res = [];

	const nextNum = (lastOne) => {
		let t = [];
		if (k === 0) {
			return [lastOne];
		}
		if (+lastOne + k <= 9) {
			t.push(+lastOne + k)
		}
		if (+lastOne - k >= 0) {
			t.push(+lastOne - k)
		}
		return t;
	}

	const resure = (num) => {
		if (num.length === n) {
			res.push(num);
		} else {
			let lastOne = num[num.length - 1];
			const nextList = nextNum(lastOne);
			nextList.forEach(item => {
				resure(`${num}${item}`);
			})
		}
	}
	for(let i = 1; i <= 9; i++) {
		resure(`${i}`);
	}

	return res;
};
// @lc code=end

// console.log(numsSameConsecDiff(3, 7))
// console.log(numsSameConsecDiff(2, 1))
// console.log(numsSameConsecDiff(2, 0))
console.log(numsSameConsecDiff(2, 2))
