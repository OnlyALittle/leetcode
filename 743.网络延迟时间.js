/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime = function(times, n, k) {
	let graph = {};

	times.forEach(item => {
		if (graph[item[0]]) {
			graph[item[0]].push([item[1], item[2]])
		} else {
			graph[item[0]] = [[item[1], item[2]]];
		}
	})
	let maxDis = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	maxDis[0] = -1;
	maxDis[k] = 0;
	let quene = [k];
	while (quene.length) {
		let item = quene.shift();
		let dis = maxDis[item];
		graph[item] && graph[item].forEach(nei => {
			if (maxDis[nei[0]] > dis + nei[1]) {
				maxDis[nei[0]] = dis + nei[1];
				quene.push(nei[0]);
			}
		});
	}
	maxDis = maxDis.sort((a,b) => b -a);
	if (maxDis[0] === Number.MAX_SAFE_INTEGER) {
		return -1;
	} else {
		return maxDis[0];
	}
};
// @lc code=end

console.log(networkDelayTime(
	[[2,1,1],[2,3,1],[3,4,1]],
	4,
	2
))
console.log(networkDelayTime(
	[[1,2,1]],
	2,
	1
))
console.log(networkDelayTime(
	[[1,2,1]],
	2,
	2
))
console.log(networkDelayTime(
	[[1,2,0]],
	2,
	1
))
console.log(networkDelayTime(
	[[1,2,0]],
	3,
	1
))
console.log(networkDelayTime(
	[[1,2,4], [2,1,0]],
	2,
	1
))