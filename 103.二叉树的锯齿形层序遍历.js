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
    if (!root) return [];
    let res = [[root.val]];
    let type = 0;
    let stack = [root]
    let temp = [];
    while (stack.length) {
        let node = stack.shift();
        node.left && temp.push(node.left)
        node.right && temp.push(node.right)

        if (stack.length === 0 && temp.length > 0) {  
            if (type % 2 === 1) {
                res.push(temp.map(item => item.val));
            } else {
                res.push(temp.map(item => item.val).reverse());
            }
            type++;
            stack = temp;
            temp = []
        }
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
let test2 = new TreeNode(
    1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
)
 
 console.log(zigzagLevelOrder2(test1))
 console.log(zigzagLevelOrder2(test2))
 console.log(zigzagLevelOrder2())

