/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) return []
	let stack = [root];
	let tempStack = [];
	let res = []
	let tempRes = [];
	while (stack.length) {
		let item = stack.shift();
		if (item) {
			tempRes.push(item.val);
            tempStack = tempStack.concat(item.children || [])
		}
		if (stack.length === 0) {
			stack = tempStack;
			res.push(tempRes);
			tempStack = []
			tempRes = []
		}
	}
	return res
};
// @lc code=end


function Node(val,children) {
   this.val = val;
   this.children = children;
};


let test = new Node(1, [
	new Node(3, [new Node(2), new Node(4, [new Node(5), new Node(6)])])
])


console.log(levelOrder(test))
