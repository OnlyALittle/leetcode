/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
// 	let N = prices.length;
// 	if (N < 2) return 0;
// 	let dp = [0, -prices[0]]
// 	for(let i = 1; i < N; i++) {
// 		dp[0] = Math.max(dp[0], dp[1] + prices[i])
// 		dp[1] = Math.max(dp[1], -prices[i]); 
// 	}
// 	return dp[0];


// };
var maxProfit = function(prices) {
    // [7,3,5,1,6,4]
    if (prices.length < 2) return 0;
    let sum = 0;
    let max = prices[0];
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        let item = prices[i];
        if (item < min) {
            min = item;
            max = item;
        } else {
            max = Math.max(item, max);
            sum = Math.max(sum, max-min)
        }
    }
    return sum
};
// @lc code=end

