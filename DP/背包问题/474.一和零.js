/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
	let N = strs.length
	let newStrs = strs.map(item => {
		let nums1 = 0
		let nums0 = 0;
		for (let i = 0; i < item.length; i++) {
			item[i] === '1' ? nums1++ : nums0++;
		}
		return [nums0, nums1];
	})

	let dep = Array.from(new Array(m+1), () => {
		let arr = new Array(n+1).fill(0);
		return arr
	});

	for(let i = 0; i < N; i++) {
		let [nums0, nums1] = newStrs[i];
		for(let j = m; j >= nums0; j--) {//0
			for(let k = n; k >= nums1; k--) //1
				dep[j][k] = Math.max(dep[j][k], dep[j - nums0][k - nums1] + 1)
				// 考虑不放自己的时候与放了自己时的最大值，（+1代表多一种可能性）
		}
	}
	return dep[m][n]
};
// @lc code=end

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5,3))
console.log(findMaxForm(["10", "0", "1"], 1, 1))
