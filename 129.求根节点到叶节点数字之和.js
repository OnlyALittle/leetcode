/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
	if (!root) return 0;

	function getNum(node, prev) {
		if (!node) return 0;
		if (!node.left && !node.right) {
			return +(prev + node.val)
		}
		return getNum(node.left, prev + node.val) 
		+ getNum(node.right, prev + node.val)
	}

	return getNum(root, '');
	// return nums.reduce((prev, cur) => {
	// 	return prev + cur;
	// }, 0)

};
// @lc code=end
