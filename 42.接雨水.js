var trap1 = function(height) {
	let N = height.length;
	if (N < 3) return 0;
	let maxListRight = new Array(N);
	// 记录i节点右边的最大节点
	for (let i = N - 2; i >=0; i--) {
		maxListRight[i] = Math.max(maxListRight[i+1] || 0, height[i+1])
	}

	let i = 1;
	let sum = 0;
	let leftMax = 0;
	while (i < N - 1) {
		leftMax = Math.max(leftMax, height[i - 1]);
		// 记录i节点左边的最大节点，同时更新
		let rM = maxListRight[i]

		let min = Math.min(leftMax, rM);
		if (min > height[i]) {
			// 看看这一格的上方能放多少的水
			sum += (min - height[i]);
		}
		i++;
	}
	return sum
};

/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let N = height.length;
	if (N < 3) return 0;

	let k = 1, i = 1, j = N - 2;
	let maxLeft = 0, v;
	let sum = 0;
	// 考虑为什么会需要max值，其实只要保证一侧的值一定小于另外一侧，那就可以只取min了
	while (k < N - 1) {
		let lv = height[i-1] || 0;
		let rv = height[j+1] || 0;

		if (lv < rv) {
			let val = height[i];
			// 左边的小，相当于说min值是左边的值，而右边界无论移动到哪儿，至少只为rv
			// 所以,把当前左边的值和历史最大比较下
			maxLeft = Math.max(lv, maxLeft);
			if (maxLeft > val)
				sum += ( maxLeft - val );
			i++;
		} else {
			let val = height[j];
			// 同上
			maxRight = Math.max(rv, maxRight);
			if (maxRight > val)
				sum += ( maxRight - val );
			j--;
		}
		k++;
	}
	return sum
};
// @lc code=end

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))