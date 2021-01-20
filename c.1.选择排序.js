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


let temp1 = [1,5,2,8,21,5,3,4];

console.log(selectionSort(temp1))