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

let temp1 = [1,5,2,8,21,5,3,4, 0, 11];
console.log(quickSort(temp1))