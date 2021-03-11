/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	if(nums < 2) return false;
	let maxNum = nums[0]
	let sum = nums.reduce((
		prev, cur
	) => {
		if (maxNum < cur) maxNum = cur;
		return prev + cur;
	}, 0)
	if (sum % 2) return false;
	let target = sum / 2;
	if (maxNum > target) return false;

	let dep = new Array(target + 1).fill(false);
	dep[0] = true ;
	for(let i = 0; i < nums.length ; i++) {
		let curPack = nums[i];
		for(let j = target; j >= curPack ; j--) {
			// 不放自己或者weight减去自己之后的结果
			dep[j] = dep[j] || dep[j - curPack]
		}
	}
	// console.log(dep)
	return dep[dep.length - 1];
};
// @lc code=end

console.log(canPartition([6, 3,1,6]))
console.log(canPartition([1,1,1,1]))
console.log(canPartition([1,5,11,5]))
console.log(canPartition([1,2,3,5]))
console.log(canPartition([1,2,3,8]))
