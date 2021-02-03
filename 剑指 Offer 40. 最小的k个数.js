// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

var getLeastNumbersQSort = function(arr, k) {
	if (k === 0) return [];
	function qSort(nums = arr) {
		if (nums.length < 2) return nums;
		let lefts = [];
		let rights = [];
		for(let i=1; i< nums.length; i++) {
			if (nums[i] <= nums[0]) lefts.push(nums[i]);
			else rights.push(nums[i]);
		}
		return [...qSort(lefts), nums[0], ...qSort(rights)];
	}

	return qSort().slice(0, k)
};




/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */


var getLeastNumbers = function(arr, k) {
	function swap(arr,  i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	function qSort(nums = arr, begin = 0, last = arr.length - 1) {
		let base = nums[begin];
		let i = begin, j = last + 1;
		while (1) {
			while (++i < last && nums[i] < base);
			while (--j > begin && nums[j] > base);
			if (i >= j) break;
			swap(nums, i, j);
		}
		swap(nums, begin, j);
		return j;
	}

	function getData(nums = arr, begin = 0, last = arr.length - 1) {
		let m = qSort(nums, begin, last);
		if (k === m) {
			return;
		} else if (k > m) {
			// 从右边在来点
			getData(arr, m + 1, last);
		} else {
			// 左边太多
			getData(arr, begin, m - 1);
		}
	}
	if (k === 0) return [];
	if (k === arr.length) return arr;
	getData();
	return arr.slice(0,k);
};

// console.log(getLeastNumbers([3, 2, 1], 1))
// console.log(getLeastNumbers([0,1,2,1], 1))
// console.log(getLeastNumbers([0,3, 10, 2,1, 5, 8, 7], 5))
// console.log(getLeastNumbers([0,0,1,3,4,5,0,7,6,7, 0], 9))
// console.log(getLeastNumbers([0,0,1,3,4,5,0,7,6,7, 0], 9))
console.log(getLeastNumbers([0,0,2,3,2,1,1,2,0,4], 9))
