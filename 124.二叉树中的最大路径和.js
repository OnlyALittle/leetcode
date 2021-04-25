/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
	let max = root.val;

	function getMax(node) {
		if (!node) return 0;
		let left = getMax(node.left);
		let right = getMax(node.right);
		max = Math.max(node.val + left + right, max);
		let t = node.val + Math.max(left, right);
		return t > 0 ? t : 0
	}

	getMax(root)

	return max;
};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
console.log(maxPathSum(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5)))))))
