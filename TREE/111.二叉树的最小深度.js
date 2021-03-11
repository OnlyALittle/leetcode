/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let level = 1;
    let nodeStack = [root];
    while(nodeStack.length) {
        let len = nodeStack.length;
        for(let i = 0; i < len; i++) {
            let node = nodeStack.shift();
            if (!node.left && !node.right) return level;
            node.left && nodeStack.push(node.left);
            node.right && nodeStack.push(node.right);
        }
        level ++;
    }
    return level;
};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 
 let test1 = new TreeNode(
     1, 
     new TreeNode(2, new TreeNode(3), new TreeNode(4)),
     new TreeNode(2, new TreeNode(4), new TreeNode(3))
 )

 let test2 = new TreeNode(
    1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), null)
)

let test3 = new TreeNode(
    2,
    null, 
    new TreeNode(3, null, new TreeNode(4, null, new TreeNode(TreeNode, null, 6) ))
)
 console.log(minDepth(null))
 console.log(minDepth(test1))
 console.log(minDepth(test2))
 console.log(minDepth(test3))