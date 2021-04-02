/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
	function dfs(node) {
		// 数组 【不偷自己，偷自己】
		let res = new Array(2).fill(0);
		if (node === null) return res;
		let left = dfs(node.left);
		let right = dfs(node.right);

		// 不偷自己，偷子节点的
		res[0] = Math.max(left[0], left[1]) +
			Math.max(right[0],right[1]);
		// 偷自己，子节点都不偷
		res[1] = left[0] + right[0] + node.val;
		return res;
	}

	let [t0 ,t1] = dfs(root);
	return Math.max(t0, t1)
};
// @lc code=end

