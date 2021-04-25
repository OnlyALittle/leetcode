var validUtf8Str = function(data) {
	let N = data.length;
	let flag = 0;
	for (let i = 0; i < N; i++) {
		let item = data[i].toString(2)
		while (item.length < 8) item = '0' + item
		if (flag === 0) {
			// 首位
			let j = 0
			if (item.substr(0, 2) == '10') return false;
			else if (item.substr(0, 5) == '11111') return false;
			else if (item[0] === '0') flag = 0;
			else {
				while (j < 8 && item[j] == 1) j++;
				flag = j - 1;
			}
		} else if (item.substr(0, 2) == '10') {
			flag--;
		} else {
			return false;
		}
	}
	return flag === 0;
};
/*
 * @lc app=leetcode.cn id=393 lang=javascript
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
	let N = data.length;
	let flag = 0;
	for (let i = 0; i < N; i++) {
		let item = data[i].toString(2)
		while (item.length < 8) item = '0' + item
		if (flag === 0) {
			// 首位
			let j = 0
			if (item.substr(0, 2) == '10') return false;
			else if (item.substr(0, 5) == '11111') return false;
			else if (item[0] === '0') flag = 0;
			else {
				while (j < 8 && item[j] == 1) j++;
				flag = j - 1;
			}
		} else if (item.substr(0, 2) == '10') {
			flag--;
		} else {
			return false;
		}
	}
	return flag === 0;
};
// @lc code=end


console.log(validUtf8([197, 130, 1]))
console.log(validUtf8([235, 140, 4]))
console.log(validUtf8([145]))
console.log(validUtf8([250,145,145,145,145]))
console.log(validUtf8([230,136,145]))

