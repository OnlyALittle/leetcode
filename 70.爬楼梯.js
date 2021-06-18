var climbStairsPrintRes = function(n) {
    // f(x) = f(x - 1) + f(x - 2)
	let x = 1;
    let y = 1;
    let temp;
    let xRes = [''];
    let yRes = ['1'];
    let tempRes;

    for(let i = 2; i<= n; i++) {
        temp = x;
        x = y;
        y = temp + y;
        tempRes = [].concat(xRes);
        xRes = yRes
        let t1 = tempRes.map(item => {
			return `${item}2`;
		})
        let t2 = yRes.map(item => {
			return `${item}1`;
		})
		yRes = t1.concat(t2)
    }
    console.log(yRes)
    return y
};

/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	let x1 = 0;
	let x2 = 0;
	let res = 1

	for(let i = 1; i <= n; i++) {
		x1 = x2;
        x2 = res;
        res = x1 + x2;
	}

	return res;
};
// @lc code=end

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))