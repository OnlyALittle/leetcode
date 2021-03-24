/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	function change(node = root) {
		if(!node) return;
		let temp = node.left;
		node.left = node.right;
		node.right = temp;
		node.left && change(node.left);
		node.right && change(node.right);
	}
	change();
	return root;
};
// @lc code=end

