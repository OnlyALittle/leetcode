var inorderTraversalResure = function(root) {
	function loop(node){
		if(!node) return [];
		let res = [];
		if (node.left) {
			res = [...loop(node.left), ...res];
		}
		res.push(node.val);
		if (node.right) {
			res = [...res, ...loop(node.right)];
		}
		return res;
	}
	return loop(root)
};

/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
	let stack = [];
	let res = [];
	while (root || stack.length) {
		while (root) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		res.push(root.val)
		root = root.right
	}
	return res;
};
// @lc code=end
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
let t1 = new TreeNode(3)
let t2 = new TreeNode(2, t1, null)
let t3 = new TreeNode(1, null, t2)


console.log(inorderTraversal(t3))
