/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function(root) {
	
	let res = 0;
	function getNumber(treeNode) {
		if (!treeNode) return 0;
		let cur = treeNode.val;
		let left = treeNode.left;
		let right = treeNode.right;
		let leftVal = left && left.val;
		let rightVal = right && right.val
		// 左右能提供的最长路径
		let lLen = getNumber(left);
		let rLen = getNumber(right);


		let lPathLen = 0;
		let rPathLen = 0;
		// 判断左右节点是否和自己相等
		if (cur === leftVal) lPathLen = lLen + 1;
		if (cur === rightVal) rPathLen = rLen + 1;

		// 最大值为和值
		res = Math.max(res, lPathLen + rPathLen);
		// 返回值只返回一条线的路径长
		return  Math.max(lPathLen, rPathLen);
	}
	getNumber(root);
	return res;
};
// @lc code=end

