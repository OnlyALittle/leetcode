/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {

	function vaildIp(str) {
		if (!/^\d+$/.test(str)) {
			return false;
		} else if(str.charAt(0) === '0' && str.length > 1) {
			return false;
		} else if (+str > 255){
			return false;
		} else {
			return true;
		}
	}
	function vaildIpv6(str) {
		if (str === '' || str.length > 4) return false;
		for (let i = 0; i < str.length; i++) {
			const item = str[i];
			if (/\d/.test(item)) continue;
			else if('0123456789abcdefABCDEF'.indexOf(item) > -1) continue
			else return false
		}
		return true;
	}



	if (IP.includes('.')) {
		let nums = IP.split('.');
		if(nums.length !== 4) return 'Neither'
		for (let i = 0; i < nums.length; i++) {
			const item = nums[i];
			if (!vaildIp(item)) return 'Neither'
		}
		return 'IPv4';
	} else if (IP.includes(':')){
		let nums = IP.split(':');
		if(nums.length !== 8) return 'Neither'
		for (let i = 0; i < nums.length; i++) {
			const item = nums[i];
			if (!vaildIpv6(item)) return 'Neither'
		}
		return 'IPv6';
	} else {
		return 'Neither'
	}
};
// @lc code=end

console.log(validIPAddress("172.16.254.1"))
console.log(validIPAddress("172.16.254.255"))
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("256.256.256.256"))
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:"))
console.log(validIPAddress("1e1.4.5.6"))

