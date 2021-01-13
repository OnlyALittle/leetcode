/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */


var answer1 = function(nums1 = [], nums2 = []) {
	let len1 = nums1.length;
    let len2 = nums2.length;
    let len = len1 + len2;
    let left = -1, right = -1;
	let aStart = 0, bStart = 0;
    for (let i = 0; i <= Math.floor(len / 2); i++) {
		// 循环去取上下两个数组中的小的那个，到一半的时候
        left = right;
        if (aStart < len1 && (bStart >= len2 || nums1[aStart] < nums2[bStart])) {
            right = nums1[aStart++];
        } else {
            right = nums2[bStart++];
		}
	}
	
	if ((len & 1) === 0)
		// 注意非整数
        return (left + right) / 2;
    else
        return right;



};






// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
	const getData = (start1, len1, start2, len2, k) => {
		// 一边的数组为0的时候，递归结束把k值的移动都放到另一边的数组去
		if (len1 === 0) {
			return nums2[start2 + k - 1]
		} else if (len2 === 0) {
			return nums1[start1 + k - 1]
		}
		// 一边的数组为1且两个数组都有值的时候，直接比较当前的值就好
		if (k === 1) return Math.min(nums1[start1], nums2[start2]);
		let halfK =  Math.floor(k / 2);
		let i = start1 + Math.min(len1, halfK) - 1;
		let j = start2 + Math.min(len2, halfK) - 1;

		if (nums1[i] > nums2[j]) {
			// 移动的是2的数组
			// 1的参数保持不变，2的start加上偏移 长度减去偏移，k值减少删去的值
			let extraNum = Math.max(halfK - len2, 0)
			return getData(start1 + extraNum, len1 - extraNum, start2 + halfK, Math.max(len2 - halfK, 0), k - halfK);
		} else {
			// 移动的是1的数组
			// 类上
			let extraNum = Math.max(halfK - len1, 0)
			return getData(start1 + halfK, Math.max(len1 - halfK, 0), start2 + extraNum, len2 - extraNum, k - halfK);
		}
	}
	let total = nums1.length + nums2.length;
	let halfNum = Math.floor(total / 2);

	if (total % 2) {
		return getData(0, nums1.length, 0, nums2.length, halfNum + 1);
	} else {
		let right = getData(0, nums1.length, 0, nums2.length, halfNum + 1);
		let left = getData(0, nums1.length, 0, nums2.length, halfNum); 2
		return (left + right) / 2;
	}
};
// @lc code=end

console.log(findMedianSortedArrays([1, 2, 5],[3, 4, 7]));