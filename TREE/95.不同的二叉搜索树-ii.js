/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
	if (n === 0) return [null];
	let dp = Array.from(new Array(n+1), () => new Array(n+1))
	function create(start, end) {
		// 从start到end能形成的所以树
		if (start > end) return [null];
		// 去缓存中查是否已经创建过了
		if (dp[start][end]) return dp[start][end];
		let res = [];
		for(let i = start; i <= end; i++) {
			let leftTree = create(start, i - 1);
			let rightTree = create(i + 1, end);
			// 笛卡尔积
			for (const lNode of leftTree) {
				for (const rNode of rightTree) {
					res.push(
						new TreeNode(i, lNode, rNode)
					);
				}
			}
		}
		// 缓存一下
		dp[start][end] = res;
		return res;
	}
	return create(1, n);
};
// @lc code=end

console.log(generateTrees(3))
console.log(generateTrees(2))