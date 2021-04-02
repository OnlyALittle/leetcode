var isSameTreeSimple = function(p, q) {
	return JSON.stringify(p) === JSON.stringify(q)
};
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (p === null && q == null) return true;
	let lStack = [p];
	let rStack = [q];
	while (lStack.length && rStack.length) {
		let left = lStack.pop();
		let right = rStack.pop();

		if (left && right && left.val === right.val) {
			if (left.left && right.left) {
				lStack.push(left.left)
				rStack.push(right.left)
			} else if (left.left || right.left) {
                return false;
            }
			if (left.right && right.right) {
				lStack.push(left.right)
				rStack.push(right.right)
			} else if (left.right || right.right) {
                return false;
            }
		} else {
			return false;
		}
	}
	return true;
};
// @lc code=end

