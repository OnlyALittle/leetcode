// 动归
var longestPalindromeProgramme = function(s) {
	// 动归
	if (s.length === 1) return s;
	
	// 初始化一张表
    var resMap = Array.from(new Array(s.length), () => new Array(s.length));
	let res = s[0];
	function vaildIsPalind(l, r) {
		if (r - l === 0) return true;
		else if (r - l === 1 && s[l] === s[r]) return true;
		else if (s[l] === s[r]) {
			return l+1 === r-1 ? true : resMap[l+1][r-1];
		} else {
			return false;
		}
	}
	for (let i = s.length - 2; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			resMap[i][j] = vaildIsPalind(i, j);
			if (resMap[i][j] && j - i + 1 > res.length ) {
				res = s.slice(i, j+1);
			}
		}
	}
	return res;
};

var longestPalindromeMidExtend = function(s) {
	if (!s.length) return '';
	if (s.length < 2) return s;
	if (s.length === 2) return s[0] === s[1] ? s : s[0];

	let begin = 0;
	let max = 1;

	for(let i = 0; i <= s.length - 2; i++) {
		let one = getLongPalind(i, i);
		let two = getLongPalind(i, i+1);

		if(max < Math.max(one, two)) {
			max = Math.max(one, two);
			begin = i - Math.floor((max - 1) / 2);
		}
	}

	return s.slice(begin, begin + max);

	function getLongPalind(begin, end) {
		let i = begin;
		let j = end;
		if (i !== j && s[i] !== s[j]) return 0;
		while (s[--i] === s[++j] && i >= 0 && j < s.length );
		return j - i - 1;
	}
};

/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (s.length < 2) return s;
	if (s.length === 2) return s[0] === s[1] ? s : s[0];
	let temp = s.split('').join('#');
	temp =	`#${temp}#`;
	// let temp = s;
		
	// 得到以center为中心的步长
	function getLongStr(left, right) {
		let i = left;
		let j = right;
		while (i >= 0 && j < temp.length && temp[i] === temp[j]) {
			i--;
			j++;
		}

		return Math.floor((j - i - 2) / 2);
	}

	let start = 0;
	let end = 0;
	let maxs = [];//存放每一个点的最大回文
	let center = -1;
	let right = -1;

	for(let i = 0; i < temp.length; i++) {
		let maxLen;
		if (right >= i) {
			let left = 2 * center - i; // 取到根据中心点对称的点

			let rightStep = right - i;
			let leftStep = maxs[left];
			let miniOne = Math.min(leftStep, rightStep);
			//       2*c -1			center      i right last one
			// c   b    a      b       c     b  a   b     d
			// 考虑上面那一种情况，可以看出与i对应的那个字符的最大步长为2(cbabc)，而i到center回文的边界的距离为1，
			// 根据回文，最后一位即便不是d但是至少不是c，不然center的回文会在往外一步
			// 所以要计算根据i最大的那一回文，可以考虑从right - i (即i在cneter回文中的最大步长边界)和2*c -1的步长中选择最小值为基础往外阔
			// 即i的扩展从c, d的索引开始比较，这样就跳过了一部分已知回文
			maxLen = getLongStr(i - miniOne, i + miniOne)
		} else {
			maxLen = getLongStr(i, i);
		}
		maxs.push(maxLen);
		if (i + maxLen > right) {
			center = i;
			right = i + maxLen;
		}
		// 得到下标
		if (maxLen * 2 + 1 > end - start) {
			// 记录回文的下标
			start = i - maxLen;
			end = i + maxLen;
		}
	}

	// console.log(temp)
	// console.log(start, end, temp.slice(start, end + 1))
	let needGet = 0;
	let t = '';
	for(let i = start; i <= end; i++) {
		if (!needGet) {
			needGet = 1;
			continue;
		} else {
			needGet = 0;
			t += temp[i];
		}
	}
	return t
};
// @lc code=end

console.log('res:', longestPalindrome('babad'))
console.log('res:', longestPalindrome('cbbd'))
console.log('res:', longestPalindrome('a'))
console.log('res:', longestPalindrome('ac'))
console.log('res:', longestPalindrome('bb'))
console.log('res:', longestPalindrome('aaaa'))
console.log('res:', longestPalindrome('aacabdkacaa'))
console.log('res:', longestPalindrome('ccc'))
console.log('res:', longestPalindrome('ccd'))