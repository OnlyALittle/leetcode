var maxSubArray2 = function(nums) {
    let mapList = new Array(nums.length);
    mapList[0] = nums[0]
    let max = nums[0];
    for (let j = 1; j < nums.length; j++) {
        mapList[j] = Math.max(nums[j], nums[j] + mapList[j - 1]);
        max = Math.max(mapList[j], max);
    }
    return max;
};
var maxSubArray3 = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        if(sum > 0) {
            // 之前的累计值由增益
            sum += num;
        } else {
            // 之前的累计值没有增益，直接舍弃前面的
            sum = num;
        }
        // 最大值
        ans = Math.max(ans, sum);
    }
    return ans;
};



/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
};
// @lc code=end

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

