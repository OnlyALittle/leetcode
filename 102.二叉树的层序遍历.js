/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    if (!root) return [];
    let temp = [];

    function getNode(nodes) {
        if(nodes.length === 0) return;
        else {
            let t = [];
            let lists = [];
            for(let i = 0; i < nodes.length; i++) {
                let node = nodes[i];
                if (!node) continue;
                t.push(node.val);
                node.left && lists.push(node.left);
                node.right && lists.push(node.right);
            }
            temp.push(t);
            getNode(lists);
        }
    }
    getNode([root]);
    return temp;
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
     new TreeNode(2, undefined, new TreeNode(3)),
     new TreeNode(2, undefined, new TreeNode(3))
 ) 

 let test3 = null
 
 console.log(levelOrder(test1))
 console.log(levelOrder(test2))
 console.log(levelOrder(test3))
