/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	function getIdKey(x) {
		return Math.floor(x / (t+1));
	}

	let temp = {};

	for(let i = 0; i < nums.length; i += 1) {
		// 这个值将会放在哪个桶里
		let key = getIdKey(nums[i]);
		// 已经存在于某一个桶的时候直接return true
		// 因为桶的范围在k内，桶内的元素都符合小于等于t
		if(temp[key] !== undefined) {
			return true;
		} else if(temp[key + 1] && Math.abs(temp[key + 1] - nums[i]) <= t) {
			// 不在同一个桶但是在隔壁桶，就需要判断下距离是不是小于等于t
			return true;
		} else if(temp[key - 1] && Math.abs(temp[key - 1] - nums[i]) <= t) {
			return true;
		}

		temp[key] = nums[i];
		// 如果i大于k，也就是大桶装满了，则需要把大桶里面的第一个小桶删了。
        if (i >= k) {
			// i-k 刚好是桶的第一个索引
			delete temp[getIdKey(nums[i - k])]
        }
	}
	return false
};
// @lc code=end

// console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
// console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2))
// console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))
console.log(containsNearbyAlmostDuplicate([0,5,0], 2, 4))