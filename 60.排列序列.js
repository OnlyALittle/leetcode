/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
	let sums = [1] // 每多一个数字的可能性列表
	let num = 2;
	while (k >= (sums[sums.length - 1] * num)) {
		sums.push(sums[sums.length - 1] * num)
		num++;
	}
	sums.push(sums[sums.length - 1] * num)

	let data = new Array(n).fill(0).map((item, index) => {
		return index + 1
	})

	function search(data, cK) {
		if(cK === 0) return '';
		else if(cK === 1) return data.join('');
		let N = data.length;
		// 现有数量的
		if (sums[N - 1] >= cK) {
			let itemCount = sums[N - 2]; // 在少一个数的话，有几种可能性
			// let needCount = 1; // 出现在第几种组合中
			// while (itemCount * needCount < cK) needCount++;
			let needCount = Math.ceil(cK / itemCount);
			let temp = `${data.splice(needCount - 1, 1)}`;
			let newCk = cK % itemCount;
			return temp + search(data, newCk === 0 ? itemCount : newCk);
		}
		return ''
	}
	let count = sums.findIndex(item => k <= item) + 1; // 需要几个数字才能凑够可能性
	let temp = data.splice(0, n - count).join('')
	temp += search(data, k);
	return temp
};
// @lc code=end

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(4, 24));
console.log(getPermutation(3, 1));