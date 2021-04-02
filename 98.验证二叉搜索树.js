var isValidBSTTemp = function(root) {
	function loop(node, min, max) {
		if (!node) return true;
		if (node.left && (node.left.val > node.val || node.left.val < min))
			return false;
		else if (node.right && (node.right.val < node.val || node.right.val > max)) 
			return false;
		let lRes = loop(node.left, min, node.val)
		let rRes = loop(node.right, node.val, max)
		return lRes && rRes;
	}

	return loop(root, -Infinity, Infinity)
};

/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
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
 * @return {boolean}
 */
var isValidBST = function(root) {
	// 中序遍历
	let pre = -Infinity;
	function loop(node) {
		if (!node) return true;
		if (!loop(node.left)) {
			return false
		}
		// 因为是中序遍历，所以前值一定是大于当前值的
		if (node.val <= pre) {
			return false
		}
		pre = node.val
		return loop(node.right)
	}
	return loop(root);
};
// @lc code=end


// let t1 = new TreeNode(1)
// let t41 = new TreeNode(4)
// let t42 = new TreeNode(4)
// let t6 = new TreeNode(6)
// let t2 = new TreeNode(2, t1, t41)
// let t5 = new TreeNode(5, t42, t6)
// let t3 = new TreeNode(3, t2, t5)
let t1 = new TreeNode(1)
let t4 = new TreeNode(4)
let t6 = new TreeNode(6)
let t2 = new TreeNode(2, t1)
let t5 = new TreeNode(5, t6, t4)
let t3 = new TreeNode(3, t2, t5)


console.log(isValidBST(t3))
