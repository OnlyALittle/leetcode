// 0-1 背包问题


function getMaxValue(values, weights, capacity) {
	let N = values.length;
	let dep = new Array(capacity+1).fill(null).map(item => []);
	dep[0] = new Array(N).fill(0)

	for(let i = 0, j = 1; i < N; j++) {
		let prev = dep[j][i - 1] || 0;// 上方的结果

		let temp = j - weights[i];

		if (temp === 0) {
			dep[j][i] = Math.max(values[i], prev);
		} else if (temp < 0) {
			dep[j][i] = prev;
		} else {
			let getIt = values[i] + (dep[temp][i-1] || 0);
			dep[j][i] = Math.max(getIt, prev);
		}
		if (j === capacity) {
			j = 0;
			i++;
		}
	}
	return dep[capacity][values.length - 1]
}

console.log(getMaxValue(
	[3,4,5],
	[3,2,4],
	5
))




// 0-1 背包问题,0.5倍数
function getMaxValue2(times, scores, N) {
	N = N * 2;
	times = times.map(item => 2 * item);
	let dp = new Array(N+1).fill(0);
	for(let i = 0; i < times.length; i++) {
		let cur = times[i], sc = scores[i];
		for(let m = N; m >= cur; m--) {
			dp[m] = Math.max(sc + dp[m - cur], dp[m])
		}
	}
	return dp[N]
}

console.log(getMaxValue2(
	[.5,.5,1,2,.5],
	[7,6,9,9,8],
	2
))


