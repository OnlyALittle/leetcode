/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
	let prevFlowerIndex = -1
	let total = 0

	for(let i = 0; i < flowerbed.length; i+=1) {
		if (flowerbed[i] === 1) {
			if (prevFlowerIndex === -1) {
				total += parseInt(i / 2);
			} else {
				total += parseInt((i - prevFlowerIndex - 2) / 2)
			}
			if (total >= n) {
				return true;
			}
			prevFlowerIndex  = i;
		}
	}

	if (prevFlowerIndex === -1) {
		total += parseInt((flowerbed.length + 1) /2);
	} else {
		total += parseInt((flowerbed.length - prevFlowerIndex - 1) /2);
	}

	return total >= n;
};
// @lc code=end

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))
console.log(canPlaceFlowers([0], 1))