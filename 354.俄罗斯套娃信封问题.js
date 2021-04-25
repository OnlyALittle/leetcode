var maxEnvelopesSlow = function(envelopes) {
	let N = envelopes.length;
	let dp = new Array(N).fill(1);
	let max = 1;

	let envelopesSort = envelopes.sort((a, b) => {
		if (a[0] !== b[0]) return a[0] - b[0];
		else return a[1] - b[1]
	})

	function canContainer(item, n) {
		let temp = 0;
		for (let i = n - 1; i >= 0; i--) {
			if (envelopesSort[i] > item) {
				temp = Math.max(temp, dp[i]);
			}
		}
		return temp;
	}

	for (let i = 1; i < N; i++) {
		let item = envelopesSort[i];
		dp[i] = canContainer(item, i) + 1
		max = Math.max(dp[i], max)
	}
	return max;
};
/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
	let dp = [];

	envelopes.sort((a, b) => {
		if (a[0] !== b[0]) return a[0] - b[0];
		else return b[1] - a[1]
		// 第二项排序可以倒序，因为w相同时取最大的h比较容易放其他的
	})

	function binary(item) {
		let i = 0, j = dp.length - 1;
		// 最接近且大的一个，
		while (i < j) {
			let mid = Math.floor((j - i) / 2) + i;
			if (dp[mid] < item) {
				i = mid + 1;
			} else if (dp[mid] == item) {
				i = mid;
				break;
			} else {
				j = mid;
			}
		}
		dp[i] = item;
	}

	for (const item of envelopes) {
		if (dp.length === 0 || dp[dp.length - 1] < item[1]) {
			dp.push(item[1])
		} else {
			binary(item[1]);
		}
	}
	return dp.length;
};
// @lc code=end

// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
// console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))
// console.log(maxEnvelopes([[10,8],[1,12],[6,15],[2,18]]))
console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]))
