/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
	let N = s.length;

	function loop(str, level) {
		let tN = str.length;
		if (level === 4) {
			if (tN > 3 || tN === 0) {
				return false
			} else if (tN > 1 && str[0] === '0') {
				return false
			} else if (+str > 255) {
				return false
			} else {
				return [str];
			}
		} else {
			// 本位取x
			let res = [];
			if (str[0] !== undefined && str[0] === '0') {
				let t = loop(str.substring(1, tN), level + 1)
				if (t) {
					res = res.concat(t.map(item => `${str.substring(0, 1)}.${item}`));
				}
			} else {
				let param = [];
				if (tN >= 1) param.push(1)
				if (tN >= 2) param.push(2)
				if (tN >= 3 && +str.substring(0, 3) <= 255) param.push(3)
				param.forEach(num => {
					let t = loop(str.substring(num, tN), level + 1)
					if (t) {
						res = res.concat(t.map(item => `${str.substring(0, num)}.${item}`));
					}
				})
			}
			return res;
		}
	}


	return loop(s, 1)
};
// @lc code=end

// console.log(restoreIpAddresses('25525511135'));
// console.log(restoreIpAddresses('0000'));
// console.log(restoreIpAddresses('1111'));
// console.log(restoreIpAddresses('010010'));
// console.log(restoreIpAddresses('101023'));
console.log(restoreIpAddresses('172162541'));