/*
 * @lc app=leetcode.cn id=802 lang=javascript
 *
 * [802] 找到最终的安全状态
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
	let markList = [];
	function dfs(node) {
		if (markList[node] === 1 || markList[node] === 3) return 3;
		if (markList[node] !== undefined && markList[node] !== 0) return markList[node];

		markList[node] = 1;
		for (let i = 0; i < graph[node].length; i += 1) {
			let temp = graph[node][i];
			if (dfs(temp) === 3) {
				return 3;
			}
		}
		markList[node] = 2;
		return 2;
	}

	let res = [];
	for(let i = 0; i < graph.length; i+=1) {
		if (dfs(i) === 2){
			res.push(i);
		}
	}
	return res;
};
// @lc code=end

let graph = [[1,2],[2,3],[5],[0],[5],[],[]];
console.log(eventualSafeNodes(graph));