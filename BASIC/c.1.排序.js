
// 快排，每次循环将大小的分列为左右两边
var quickSort = function(nums) {
	if (nums.length < 2) return nums;

	let mid = Math.floor(nums.length / 2);
	let midItem = nums[mid];
	let leftList = [];
	let rightList = [];

	nums.forEach((item, index) => {
		if (index !== mid) {
			if(item <= midItem) {
				leftList.push(item);
			} else {
				rightList.push(item);
			}
		}
	});
	return [...quickSort(leftList), midItem, ...quickSort(rightList)]
}


// 插排，把数插入到签名排好序的列中，在逐一向后移动
var insertSort = function(arr) {
	var len = arr.length;
	for(var i = 1; i < len; i ++ ){
		var j = i - 1;
		var tmp = arr[i];
		while(j >= 0 && tmp < arr[j]){
			arr[j + 1] = arr[j];
			j--;
		}
		if(j != i - 1){
			arr[j + 1] = tmp;
		}
	}
	return arr;
}


// 选择排序，一点点往后查找，每次都找后面的最小值，替换到现在的位置
var selectionSort = function(nums) {
	if (!nums || !nums.length) return nums;

	let length = nums.length;
	for(let i = 0; i < length ; i++) {
		let smallest = nums[i];
		let sIndex = i;
		for(let j = i; j < nums.length ; j++) {
			if (nums[j] < smallest) {
				smallest = nums[j];
				sIndex = j;
			}
		}
		if (smallest < nums[i]) {
			// 换位置
			let temp = nums[i];
			nums[i] = smallest;
			nums[sIndex] = temp;
		}
	}
	return nums;
}


// 冒泡排序，一点点往后查找，于选择排序不同的是，冒泡是只要找到大的就换位置，
// 选择则是直到找到最大的才换位置
var bubbleSort = function(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
	}
	return arr;
}

let temp1 = [1,5,2,8,21,5,3,4, 0, 11];
console.log(quickSort(temp1))