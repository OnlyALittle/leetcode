/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
	// val left right
    if (!root) return []
	let stack = [root]
	let res = [];

	while (stack.length) { 
		let node = stack.pop();
		res.push(node.val)
		node.right && stack.push(node.right)
		node.left && stack.push(node.left)
	}

	return res;

};
// @lc code=end

