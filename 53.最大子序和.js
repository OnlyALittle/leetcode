var maxSubArrayGetValue = function(nums) {
    let ans = nums[0];
    let sum = 0;
    let res = [0, 0];
    let temp = [0, 0];
    for (let i = 0 ; i < nums.length; i++) {
        const num = nums[i];
        if(sum > 0) {
            sum += num;
        } else {
            // 需要重新计算
            sum = num;
            temp[0] = i;
        }
        temp[1] = i;
        if (sum > ans) {
            ans = sum;
            res = temp;
        }
    }
    console.log(nums.slice(res[0], res[1] + 1))
    return ans;
};
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
    var subMax = function(left, right) {
        if(left>=right){
            return nums[left];
        }
    
        let mid = left + Math.floor(( right - left ) / 2);

        let leftMax = subMax(left, mid);
        let rightMax = subMax(mid + 1, right);

        // 考虑最大自序包括了mid值
        let leftSum = -Infinity;
        let rightSum = -Infinity;
        let sum = 0;
        for(let i=mid; i>=left;i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        sum = 0;
        for(let i=mid+1; i<=right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        return Math.max(leftMax, Math.max((leftSum + rightSum), rightMax));
    };

    return subMax(0, nums.length-1);   
};

// @lc code=end


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1,2]))
