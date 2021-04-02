/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
	let err;
	let nerr;
	let prev;
	function loop(node) {
		if (!node) return;
		// 中序，左节点先loop
		loop(node.left)
		if (!prev) {
			// 记录一下prev
			prev = node;
		} else {
			if (prev.val >= node.val) {
				// 如果prev大，违反了规定，该节点需要被改
				nerr = node;
				// 如果此时还没有前置的错误节点
				// 就把prev当作前置节点，（因为prev>cur)
				if (!err) err = prev;
			}
			// 修正prev
			prev = node;
		}
		// 走右节点
		loop(node.right)
	}

	loop(root);
	// 执行更换
	if (err && nerr) {
		let t = err.val;
		err.val = nerr.val;
		nerr.val = t;
	}
};
// @lc code=end

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

let t2 = new TreeNode(2)
let t1 = new TreeNode(1)
let t4 = new TreeNode(4, t2)
let t3 = new TreeNode(3, t1, t4)

recoverTree(t3);
console.log(t3)
