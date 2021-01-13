var missingNumber = function(nums) {
	if (!nums || !nums.length) return null;
	let length = nums.length;
	let l = 0;
	let r = length - 1;
	while(l != r) {
		let mid = Math.floor((l+r) / 2);
		if (nums[mid] === mid) {
			// 相等
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return l + 1;
}

let temp1 = [0,1,3];
let temp2 = [0,1,2,3,4,5,6,7,9];

console.log(missingNumber(temp1) - 1, missingNumber(temp2) - 1);