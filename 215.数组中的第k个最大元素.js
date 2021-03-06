/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
// 	let index =  nums.length - k + 1
// 	function quickSort(list, prevNum = 0) {
// 		let N = list.length;
// 		let mid = Math.floor(N / 2);
// 		let midItem = list[mid]
// 		let prev = []
// 		let next = []
// 		let cur = []
// 		// 正常快排的分列
// 		list.forEach(item => {
// 			if (item > midItem) {
// 				next.push(item)
// 			} else if (item < midItem) {
// 				prev.push(item)
// 			} else 
// 				cur.push(item)
// 		});
// 		if (prevNum + prev.length >= index) {
// 			// 刚好在左侧区域内，排左侧区域
// 			return quickSort(prev, prevNum)
// 		} else if (prevNum + prev.length + cur.length >= index) {
// 			// 刚好在中间区域内，直接取mid值
// 			return midItem;
// 		} else {
// 			// 在右侧区域内，排右侧区域，修改前置项的数目，来确定求后面部分前几项
// 			return quickSort(next, prevNum + prev.length + cur.length)
// 		}
// 	}

// 	return quickSort(nums)
// };
// @lc code=end
var findKthLargest = function(nums, k) {
    function quickSort(list, needLen) {
        let LN = list.length;
        let mid = Math.floor(LN / 2);
        let midItem = list[mid];
        let prev = []
        let next = []
        let midItems = []

        for (const item of list) {
            if (item > midItem) next.push(item);
            else if (item < midItem) prev.push(item);
            else  midItems.push(item);
        }
        if (needLen <= prev.length) return quickSort(prev, needLen);
        else if (needLen <= prev.length + midItems.length) return midItem;
        else return quickSort(next, needLen - prev.length - midItems.length);

    }
    console.log(nums.length - k)
    return quickSort(nums, nums.length - k);
};
console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6] , 4))
