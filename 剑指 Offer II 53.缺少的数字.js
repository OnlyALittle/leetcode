/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 */


// 示例 1:

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1]
// 输出: 2
// 示例 2:


// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

var missingNumber = function(nums) {
	if (!nums || !nums.length) return null;
	let length = nums.length;
	let l = 0;
	let r = length - 1;
	if (nums[length - 1] === length - 1) {
		return nums.length;
	}
	while(l != r) {
		let mid = Math.floor((l+r) / 2);
		if (nums[mid] === mid) {
			// 相等
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return l;
}

var missingNumber2 = function(nums) {
	if (!nums || !nums.length) return null;
	if (nums[nums.length - 1] === nums.length - 1) {
		return nums.length;
	}
	function getMiss(left = 0, right = nums.length - 1) {
		if (left === right) return left;
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === mid) {
			// 相等
			return getMiss(mid + 1, right);
			// l = mid + 1;
		} else {
			return getMiss(left, mid);
			// r = mid;
		}
	}
	return getMiss();
}

let temp1 = [0,1,3];
let temp2 = [0,1,2,3,4,5,6,7,9];
let temp3 = [0, 1];

// console.log(missingNumber(temp1) - 1, missingNumber(temp2) - 1);
console.log(missingNumber(temp1), missingNumber2(temp1));
console.log(missingNumber(temp2), missingNumber2(temp2));
console.log(missingNumber(temp3), missingNumber2(temp3));
