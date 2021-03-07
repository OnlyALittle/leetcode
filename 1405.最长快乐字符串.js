/*
 * @lc app=leetcode.cn id=1405 lang=javascript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start

function sortList(lists) {
	return lists.sort((a,b) => {
		return b[1] - a[1];
	})
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
	let str = '';
	let sorts = sortList([
		['a', a],['b', b],['c', c]
	]);
	// console.log(sorts)
	while (sorts[0][1] !== 0) {
		let getList = sorts[0];
		// 先放最多的
		// 如果上个放的2个字符串和剩余个数最多的字符相同，则放置次多的字符
		if (
			str.length >= 2 &&
			str.charAt(str.length - 1) === sorts[0][0] && 
			str.charAt(str.length - 2) === sorts[0][0] 
		) {
			if (sorts[1][1] > 0) {
				// 放一个就行
				str += sorts[1][0];
				sorts[1][1] --;
			} else {
				// 没有次多，直接gg
				break;
			}
		} else {
			if (getList[0] === str.charAt(str.length - 1) || getList[1] === 1) {
				str += getList[0];
				getList[1] --;
			} else if (getList[1] >= 2){
				str += (getList[0] + getList[0]);
				getList[1] -= 2;
			}
			sorts = sortList(sorts);
		}
		// console.log(sorts)
	}
	return str;

};
// @lc code=end

console.log(longestDiverseString(1, 1, 7))
// console.log(longestDiverseString(2, 2, 1))
// console.log(longestDiverseString(7, 1, 0))
// console.log(longestDiverseString(6, 7, 3))
console.log(longestDiverseString(0, 8, 11))