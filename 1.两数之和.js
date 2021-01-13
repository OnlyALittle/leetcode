/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

 let data = [
    1,2,6,7,10,8,9
 ]


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumIsLow = function(nums, target) {
    let resultList = [];
    let length = nums.length;
    for (let leftIndex = 0; leftIndex < length; leftIndex += 1) {
        let leftItem = nums[leftIndex];
        for (let rightIndex = leftIndex + 1; rightIndex < length; rightIndex += 1) {
            let rightItem = nums[rightIndex];
            if (leftItem + rightItem === target){
                resultList.push(leftIndex);
                resultList.push(rightIndex);
                break;
            }
        }
        if (resultList.length > 0) {
            break;
        }
    }
    return resultList;
};
var twoSum = function(nums, target) {
    let temp = {};
    let length = nums.length;
    for (let index = 0; index < length; index += 1) {
        const item = nums[index];
        if (temp[target - item] != undefined) {
            return [temp[target - item], index];
        }
        temp[item] = index;
    }
    return [];
};
// @lc code=end

const res = twoSum(data, 7);
console.log(res);