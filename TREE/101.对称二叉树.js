var isSymmetricDFS = function(root) {
    let temp = [];
    if (!root) return true;

    function getLoop(links, node) {
        let t = `${links}${node.val}`
        if (!node.left && !node.right) {
            temp.push(t);
            return;
        }
        if (node.left) {
            getLoop(t, node.left)
        } else {
            temp.push(t);
        }
        if (node.right) {
            getLoop(t, node.right)
        } else {
            temp.push(t);
        }
    }

    getLoop('', root);
   
    if (temp.length <= 1) {
        return true;
    } else if (temp.length % 2 === 0) {
        let maxIndex = temp.length / 2 - 1;
        //  console.log(temp,maxIndex)
        let index = 0
        while (maxIndex >= index) {
            // console.log(index, temp.length - 1 - index)
            if (temp[index] === temp[temp.length - 1 - index]) {
                index += 1;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};

/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //bfs
    if (!root) return true;

    function check(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        return left.val ===  right.val && check(left.left, right.right) && check(left.right, right.left)
    }
    return check(root, root)
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

console.log(isSymmetric(test1))
console.log(isSymmetric(test2))