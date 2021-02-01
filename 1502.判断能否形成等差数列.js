/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
	let num = 0;
	for(let i = 0; i < arr.length; i++) {
		let smallest = arr[i];
		let index = i;
		for(let j = i; j < arr.length; j++) { 
			if(smallest > arr[j]) {
				smallest = arr[j];
				index = j;
			}
		}
		if(smallest < arr[i]) {
			arr[index] = arr[i];
			arr[i] = smallest;
		}
		// 当排序到第一个时计算等差值
		if (i == 1) num = arr[1] - arr[0];
		// 当排序大于第一个时计算每一项等差值同时判断是否跳出
		if (i > 1 && (arr[i] - arr[i-1]) !== num) {
			return false;
		}
	}
	return true;
};
// @lc code=end

console.log(canMakeArithmeticProgression([3,6,9]))