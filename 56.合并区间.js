
var slow = function(intervals) {
	let sortList = intervals.sort((a, b) => {
		return b[1] - a[1];
	})

	let res = [];
	let max;
	let min;
	sortList.forEach(i => {
		let l = i[0];
		let r = i[1];
		if (min === undefined) {
			min = l;
			max = r;
		} else if (r < min) {
			res.push([min, max]);
			min = l;
			max = r;
		} else if (r >= min) {
			min = Math.min(l, min);
		}
	})
	res.push([min, max]);
	return res.reverse();
};



/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	let sortList = intervals.sort((a, b) => {
		return a[0] - b[0];
	})

	let res = [];
	let max = sortList[0][1];
	let min = sortList[0][0];
	sortList.forEach(i => {
		if (i[0] > max) {
			res.push([min,max]);
			min = i[0];
			max = i[1];
		} else {
			max = Math.max(max, i[1]);
		}
	})
	res.push([min, max]);
	return res;
};
// @lc code=end

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,3],[0,6],[8,10],[15,18]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));
