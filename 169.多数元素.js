var majorityElementMap = function(nums) {
    let temp = {};
    let res;
    for (let item of nums) {
        if (temp[item]) {
            temp[item] += 1;
        } else {
            temp[item] = 1;
        }
        if (temp[item] > nums.length / 2) {
            res = item;
            break;
        }
    }
    return res;
};

var majorityElementStack = function(nums) {
    let stack = []
    for(let n of nums){
      let m = stack.length
      if(stack[m - 1] === n || !m){
        stack.push(n)
      } else {
        stack.pop()
      }
    }
    return stack[0]
  };

/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let x = nums[0] // 记录栈内最多的那个元素
    let m = 1 // 记录栈元素的数量
    for(let i = 1; i < nums.length; i++) {
        // n就是最多那个
        if(m === 0) x = nums[i];
        // 当前数不等于最多元素时-1
        // 当前数等于最多元素时+1
        if (x === nums[i]) {
            m += 1
        } else {
            m -= 1
        }
    }
    return x;
};
// @lc code=end

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

