/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
	if (points.length === 0) return 0;
	let sortPoints = points.sort((a,b) => {
		return a[0] - b[0];
	})

	let blockLeft = sortPoints[0][0]
	let blockRight = sortPoints[0][1]
	let nums = 1;

	for(let i = 1; i < sortPoints.length; i += 1) {
		let tempL = sortPoints[i][0];
		let tempR = sortPoints[i][1];

		if (blockRight < tempL) {
			nums++;
			blockLeft = tempL;
			blockRight = tempR;
		} else if (blockRight < tempR) {
			blockLeft = tempL;
		} else {
			blockLeft = tempL;
			blockRight = tempR;
		}
	}
	return nums;
};
// @lc code=end


console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));
console.log(findMinArrowShots([[1,2]]));
console.log(findMinArrowShots([[2,3],[2,3]]));