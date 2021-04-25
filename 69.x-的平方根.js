/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	if(x === 1) return 1
	let i = 1, j = x;
	let mid = i + Math.floor((j - i) / 2);
	while (i < mid) {
		let mValue = Math.floor(x / mid);

		if (mValue > mid) {
			i = mid + 1;
		} else if (mValue == mid) {
			return mid;
		} else {
			j = mid ;
		}
		mid = i + Math.floor((j - i) / 2);
	}

	if (x / i >= i) return i;
	else return i - 1;
};
// @lc code=end

console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(2))
console.log(mySqrt(4))
console.log(mySqrt(5))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(15))
console.log(mySqrt(16))
