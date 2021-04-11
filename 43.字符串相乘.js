function calc(num, num2) {
	let N2 = num2.length
	if (num == '0') return '0';
	else if (num == '1') return num2;
	let c = 0;
	let res = '';
	let i = N2 - 1;
	while (i >= 0) {
		let t = num2[i];
		let t2 = +t * +num + c;
		c = parseInt(t2/10);
		res = `${t2 % 10}${res}`
		i--;
	}
	return c ? `${c}${res}` : res;
}

function calc2(num1, num2) {
	let c = 0;
	let res = [];
	let i = num1.length - 1
	let j = num2.length - 1
	while (i >= 0 || j >= 0) {
		let l = i >= 0 ? num1[i] : 0;
		let r = j >= 0 ? num2[j] : 0;
		let t2 = +l + +r + c;
		c = parseInt(t2/10);
		res.push(t2 % 10);
		i--;
		j--;
	}
	if (c) {
		res.push(c);
		return res.reverse().join('')
	} else {
		return res.reverse().join('')
	}
}

var multiplySlow = function(num1, num2) {
	if (num1 === '0' || num2 === '0') return '0'
	let N1 = num1.length

	let sum = '0';
	let temp = '';
	for(let i = N1 - 1; i >= 0; i--) {
		if (i != N1 - 1) temp += '0'
		let t = num1[i];
		let x = calc(t, num2);
		sum = calc2(x + temp, sum);
	}
	return sum;
};

/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if (num1 === '0' || num2 === '0') return '0';
	let N1 = num1.length;
	let N2 = num2.length;
	let res = new Array(N1 + N2).fill(0);

	for (let i = N1 - 1; i >= 0; i--) {
		for (let j = N2 - 1; j >= 0; j--) {
			let temp = +num1[i] * +num2[j] + res[i+j+1];
			res[i+j+1] = temp % 10;
			res[i+j] += parseInt(temp/10);
		}
	}

	while (res[0] === 0) {
		res.shift()
	}
	return res.join('')
};

// @lc code=end

console.log(multiply('2', '3'))
console.log(multiply('123', '456'))
console.log(multiply('0', '0'))
console.log(multiply('1', '0'))