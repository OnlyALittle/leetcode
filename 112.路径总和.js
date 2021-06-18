/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
	 if (!root) return false;
	function dfs(node, prevVal) {
        let newVal = node.val + prevVal;
        if (node.left || node.right) {
			let lRes = false;
			let rRes = false;
			if (node.left) lRes = dfs(node.left, newVal);
			if (node.right) rRes = dfs(node.right, newVal);

            return lRes || rRes;
        } else {
            return newVal === targetSum;
        }
	}
	return dfs(root, 0);
};
// @lc code=end



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
let data = new TreeNode(1, new TreeNode(2));

console.log(hasPathSum(data, 1))