var slowSelectSort = function(nums) {
	if (nums.length === 1) return nums;

	for(let i = 0; i < nums.length; i++) {
		let smallest = nums[i];
		let index = i;
		for(let j = i; j < nums.length; j++) {
			if (nums[j] < smallest) {
				index = j;
				smallest = nums[j];
			}
		}
		if (nums[i] > smallest) {
			nums[index] = nums[i];
			nums[i] = smallest;
		}
	}
	return nums;
};


var error1 = function(nums) {
	// 需要直接在nums上修改
	if (nums.length === 1) return nums;
	let temp = Object.create(null);
	for (let i = 0; i< nums.length; i++) {
		temp[nums[i]] = (temp[nums[i]] || 0) + 1;
	}
	let l0 = Array(temp[0]).fill(0);
	let l1 = Array(temp[1]).fill(1);
	let l2 = Array(temp[2]).fill(2);
	nums = [...l0, ...l1, ...l2];
	return nums;
	
};


/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	let count = nums.length;
	let i=0;
	if (count === 1) return nums;

	while(count > 0) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.unshift(0);
		} else if (nums[i] === 2) {
			nums.splice(i, 1);
			nums.push(2);
			//push 到最后的时候不需要++
			i--;
		} 
		i++;
		count--;
	}
	return nums;
	
};
// @lc code=end


console.log(sortColors([1,2,0]))

console.log(sortColors([2,0,2,1,1,0]))
