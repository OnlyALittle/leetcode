var numRabbitsSlow = function(answers) {
	let map = {};
	for(let i = 0; i < answers.length; i++) {
		let ans = answers[i];
		if(map[ans]) map[ans] += 1;
		else map[ans] = 1;
	}
	let sum = 0;
	Object.entries(map).forEach(item => {
		let ans = +item[0];
		let times = item[1];
		sum += (Math.ceil(times / (ans + 1)) * (ans + 1))
	})

	return sum;
};

/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
	let map = new Map();
	return answers.reduce((sum, cur) => {
		if (map.has(cur)) {
			// 如果已经加入过了
			const count = map.get(cur);
			if (count > 0) {
				map.set(cur, count - 1);
				return sum;
			}
		}
		map.set(cur, cur);
		return sum + cur + 1;
	}, 0);
};
// @lc code=end


console.log(numRabbits([1,0,1,0,0]))