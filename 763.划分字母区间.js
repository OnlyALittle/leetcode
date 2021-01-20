/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */


var partitionLabelsSlow = function(S) {
	let temp = {};
	S.split('').forEach((item, index) => {
		temp[item] ? temp[item][1] = index : temp[item] = [index];
	})

	
	const findData = (first, lastIndex) => {
		let max = 0;
		let t = first;
		while(t < lastIndex) {
			let indexs = temp[S.charAt(t)];
			max = Math.max(indexs[indexs.length - 1], max);
			t++;
		}
		// console.log(first, lastIndex, max)
		if (max > lastIndex) {
			return findData(lastIndex, max);
		} else {
			return Math.max(max, lastIndex);
		}
	}


	let first = 0;
	let startIndex = first;
	let res = [];
	while(first < S.length - 1) {
		let t = temp[S.charAt(first)];
		if (t.length === 1) {
			first ++;
			startIndex = first;
			res.push(1);
		} else {
			let lastOneIndex = findData(first, t[1]);
			first = lastOneIndex + 1;
			res.push(lastOneIndex - startIndex + 1);
			startIndex = first;
		}
	}
	if (startIndex <= S.length - 1) {
		res.push(S.length - startIndex); 
	}

	return res;
};


// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
	let temp = new Array(26);

	let codeA = 'a'.codePointAt(0);
	for (let i = 0; i < S.length; i++) {
		temp[S.charAt(i) - codeA] = i;
	}

	let res = [];
	let start = 0;
	let end = 0;

	for (let i = 0; i < S.length; i++) {

		let strCode = S.charAt(i);
		let index = temp[strCode - codeA];

		end = Math.max(end, index);
		// start = i;
		if (i === end) {
			res.push(end-start);
			start = i;
		}
	}

	return res;
};
// @lc code=end

console.log(partitionLabels("caedbdedda"))
console.log(partitionLabels("ababcbacadefegdehijhklij"))
console.log(partitionLabels("qiejxqfnqceocmy"))
