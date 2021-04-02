/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	let pre = i =0
	function build(stop) {
		if (inorder[i] !== stop) {
			let root = new TreeNode(preorder[pre++]);
			root.left = build(root.val)
			i++;
			root.right = build(stop);
			return root;
		}
		return null;
	}
	return build();
};
// @lc code=end

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

// console.log(buildTree([1,2], [1,2]))
console.log(buildTree([1,2,3], [3,2,1]))
// console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
