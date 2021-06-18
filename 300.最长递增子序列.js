// [10,9,2,5,3,7,101,18]
// 最长对增子串求具体值
function getLengthOfLISList(nums) {
	let N = nums.length;
	let dp = new Array(N).fill(1);
	let dpIndex = [-1];
	let max = 1;
	let curIndex = 0;
	for(let i = 1; i<N; i++) {
		let pre = -1; // 这个i最优的前进索引
		for(let j = 0; j<i;j++) {
            if(nums[j] < nums[i] && dp[i] < dp[j] + 1) {
                pre = j;// 修正前置索引
				dp[i] = dp[j]+1
			}
		}
		if (dp[i] > max) {
            // 用于在最后推结果时作为起点
            curIndex = i;
            max = dp[i];
        }
		dpIndex[i] = pre; // 该节点的前置节点
	}

	let res = [];

	while (curIndex > 0) {
		res.push(nums[curIndex]);
		curIndex = dpIndex[curIndex]
	}
	return res.reverse();
}
// [10,9,2,5,3,7,101,18]
var lengthOfLISSimple = function(nums) {
	if (!nums.length) return 0;
	// 到i位置时的递增子串数
	let dp = new Array(nums.length).fill(1);
	
	let max = 1;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
                // 考虑；i本身的值，和考虑由j进一步的到的值
                // i本身的值可能是之前的j进一步缓存下的值
				dp[i] = Math.max(dp[j]+1, dp[i])
				max = Math.max(max, dp[i])
			}
		}
	}
	return max
};
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [10,9,2,5,3,7,101,18]
var lengthOfLIS = function(nums) {
    let len = 1, n = nums.length
    if (n === 0) return 0
    let d = []
    d[len] = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > d[len]) {
			// 如果值比现在的值大，这样就扩展数组
            d[++len] = nums[i];
        } else {
            let l = 1, r = len, pos = 0;
			// 如果找不到说明所有的数都比 nums[i] 大，
			// 此时要更新 d[1]，所以这里将 pos 设为 0
            while (l <= r) {
                let mid = Math.floor((l + r) / 2)
                if (d[mid] < nums[i]) {
                    pos = mid;
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            d[pos + 1] = nums[i];
        }
    }
    return len;
};
// @lc code=end

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([7,7,7,7,7,7,7]))
console.log(lengthOfLIS([4,10,4,3,8,9]))
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))

console.log(getLengthOfLISList([0,1,0,3,2,3]))
console.log(getLengthOfLISList([7,7,7,7,7,7,7]))
console.log(getLengthOfLISList([4,10,4,3,8,9]))
console.log(getLengthOfLISList([10,9,2,5,3,7,101,18]))
console.log(getLengthOfLISList([1,3,6,7,9,4,10,5,6]))