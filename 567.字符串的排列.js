/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	let N1 = s1.length
	let N2 = s2.length
	if (N1 > N2) return false;
	
	let m1 = new Array(26).fill(0), 
		m2 = new Array(26).fill(0);
	let aCode = 'a'.charCodeAt();

	// 统计s1中的字符
	for (let i = 0; i < N1; i++) {
		m1[s1[i].charCodeAt() - aCode]++;
	}

	let j = 0;
	let left = 0;
	while (j < N2) {
		let rightIndex = s2[j].charCodeAt() - aCode
		m2[rightIndex] ++;
		// 判断当前值的数量是不是超了
		//s2[left].charCodeAt() - aCode，判断最左侧的字母数量是不是多
		// 多了left向右
		while (
			left <= j && 
			m2[s2[left].charCodeAt() - aCode] > m1[s2[left].charCodeAt() - aCode]
		) {
			m2[s2[left].charCodeAt() - aCode] --;
			// left右移
			left ++;
		}
		// 长度相等，并且包含的值相同时返回
		if (j - left === N1 - 1 && m1.toString() === m2.toString()) {
			return true;
		}
		j++;
	}
	return false
};
// @lc code=end

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))
console.log(checkInclusion("ky", "ainwkckifykxlribaypk"))