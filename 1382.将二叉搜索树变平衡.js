/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
	let list = [];
	function loop(node) {
		node.left && loop(node.left);
		let right = node.right;
		node.left = null
		node.right = null
		list.push(node);
		right && loop(right);
	}

	function create(node, i ,j){
		if (i === j) return list[i];
		else {
			let center = Math.floor((i+j) / 2);
			let centerNode = list[center];
			if (center - 1 >= i) {
				centerNode.left = create(list[center], i, center - 1);
			}
			if (center + 1 <= j) {
				centerNode.right = create(list[center], center + 1, j);
			}
			return centerNode
		}
	}
	loop(root)
	let res = create(root,0, list.length - 1);
	return res;
};
// @lc code=end

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let test4 = new TreeNode(4)
let test3 = new TreeNode(3)
let test2 = new TreeNode(2)
let test = new TreeNode(1)
test.right = test2;
test2.right = test3;
test3.right = test4
console.log(balanceBST(test))


