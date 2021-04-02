/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

	let v1s = version1.split('.')
	let v2s = version2.split('.')

	while(v1s.length < v2s.length) v1s.push(0);
	while(v1s.length > v2s.length) v2s.push(0);

	for(let i = 0; i < v1s.length; i++) {
		if (+v1s[i] < +v2s[i]) {
			return -1;
		} else if (+v1s[i] > +v2s[i]) {
			return 1;
		}
	}
	return 0;
};
// @lc code=end

