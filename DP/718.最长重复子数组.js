var findLengthSimpleDp = function(A, B) {
	let dp = Array.from(new Array(A.length + 1), () => new Array(B.length+ 1).fill(0))
	for(let i = 1; i <= A.length; i++) {
		for(let j = 1; j <= B.length; j++) {
			dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
			if (A[i-1] === B[j-1]) dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + 1)
		}
	}
	return dp[A.length][B.length];
};

var findLengthBigMemory = function(A, B) {
	let max = 0;
	let dp = Array.from(new Array(A.length + 1), () => new Array(B.length + 1).fill(0))

	for(let i = 1; i <= A.length; i++) {
		for(let j = 1; j <= B.length; j++) {
			let res = A[i-1] === B[j-1] ? 1 : 0;
			if (res) {
				dp[i][j] = dp[i-1][j-1] + 1;
				max = Math.max(dp[i][j], max);
			}
		}
	}
	return max;
};
/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
	let max = 0;
	let dp = new Array(B.length + 1).fill(0);

	for(let i = 1; i <= A.length; i++) {
		for(let j = B.length; j >= 1; j--) {
			if (A[i-1] === B[j-1]) {
				dp[j] = dp[j-1] + 1;
			} else {
				dp[j] = 0;
			}
			max = Math.max(dp[j], max);
		}
	}
	return max;
};
// @lc code=end

console.log(findLengthSimpleDp([1,2,3,2,1], [3,2,1,4,7]))
console.log(findLengthSimpleDp([70,39,25,40,7], [52,20,67,5,31]))
console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))
console.log(findLength([70,39,25,40,7], [52,20,67,5,31]))

