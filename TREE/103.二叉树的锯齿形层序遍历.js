/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    if (!root) return [];
    let nodeStack = [root];
    let toLeft = false;

    while(nodeStack.length) {
        let temp = [];
        let nextStack = [];
        while(nodeStack.length) {
            let node;
            if (toLeft) {
                node = nodeStack.pop();
                node.right && nextStack.unshift(node.right)
                node.left && nextStack.unshift(node.left)
            } else {
                node = nodeStack.shift();
                node.left && nextStack.push(node.left)
                node.right && nextStack.push(node.right)
            }
            temp.push(node.val)
        }
        toLeft = !toLeft;
        res.push(temp);
        nodeStack = nextStack;
    }
    return res;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 
 let test1 = new TreeNode(
    3, 
    new TreeNode(9, new TreeNode(1), new TreeNode(3)),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
 )

 console.log(zigzagLevelOrder(test1))
 console.log(zigzagLevelOrder())
 