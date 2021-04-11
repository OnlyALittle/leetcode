/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	let pV = p.val
	let qV = q.val
	let ans
	function dfs(node) {
		if (!node) return null;
		let temp = null;
		const lRes = dfs(node.left)
		const rRes = dfs(node.right)
		if (node.val === pV || node.val === qV) {
			temp = node;
		}
		if (temp && (lRes || rRes)) {
			// 自己的值，加子节点
			ans = node;
		} else if (lRes && rRes) {
			ans = node;
		}

		return lRes || rRes || temp
	}
	dfs(root)
    return ans;
};
// @lc code=end

