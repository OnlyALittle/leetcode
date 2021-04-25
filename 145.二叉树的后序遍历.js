/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
	// left right val
	if (!root) return []
	let stack = [root]
	let res = []
	while (stack.length) {
		let node = stack.pop();
		res.unshift(node.val);

		node.left && stack.push(node.left)
		node.right && stack.push(node.right)
	}
	return res
};
// @lc code=end

