var levelOrderBottomResure = function(root) {
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
    return temp.reverse();
};

/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
    if(!root)return [];
    let queue=[root];
    let res=[];
    let level=0;
    while(queue.length){
      let temp=[];
      res[level]=[];
      for(let i=0;i<queue.length;i++){
        res[level].push(queue[i].val);
        if(queue[i].left){
          temp.push(queue[i].left);
        }
        if(queue[i].right){
          temp.push(queue[i].right);
        }
      }
      queue=temp;
      ++level;
    }
    return res.reverse();
  };
// @lc code=end


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 
 let test1 = new TreeNode(
     3, 
     new TreeNode(9, new TreeNode(3), new TreeNode(1)),
     new TreeNode(20, new TreeNode(15), new TreeNode(7))
 )

 let test3 = null
 
 console.log(levelOrderBottom(test1))
 console.log(levelOrderBottom(test3))
