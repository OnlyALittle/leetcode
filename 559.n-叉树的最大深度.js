var maxDepthDiTui = function(root) {
    if(!root) return 0;
    let queue = [];
    let level = 0;
    queue.push(root);

    while(queue.length) {
        let length = queue.length;
        while(length -- ) {
            let node = queue.shift();
            node.children && (queue = queue.concat(node.children));
        }
        level ++;
    }
    return level;
};
/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
	function loop(node) {
		if (!node) return 0;
		let leftMax = loop(node.left)
		let rightMax = loop(node.right)
		return Math.max(leftMax, rightMax) + 1;
	}
	return loop(root)
};
// @lc code=end

