/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
	let N = nums.length
	if (N < 3) return [];
	let ans = []
	let sNums = nums.sort((a, b) => a - b);
	// [-4, -3, -2, -1, 0, 1, 2, 3, 4]
	for (let i = 0; i < N; i++) {
		if(sNums[i] > 0) break;
		if (sNums[i] === sNums[i - 1]) continue
		// 最左侧的指针
		let j = i + 1;
		let k = N - 1;

		while (j < k) {
			let res = sNums[j] + sNums[k] + sNums[i];
			if (res === 0) {
				ans.push([sNums[i], sNums[j], sNums[k]]);
			}

			if (sNums[j] + sNums[i] > 0) {
				// 左边两个数相加已经大于0，往下无解了
				break;
			} else if (res > 0) {
				k--;
				while (sNums[k] === sNums[k+1] && j < k && sNums[k] >= 0) k--;
			} else {
				j++;
				while (sNums[j] === sNums[j-1] && j < k) j++;
			}
		}
	}
	return ans;
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-4, -3, -2, -1, 0, 1, 2, 3, 4]))
console.log(threeSum([]))
console.log(threeSum([0]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([1,1,1]))