/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
	if(!wordList.includes(endWord)) return [];
	let wordListMap = {}

	const canTransform = (begin, end) => {
		let diff = 0;
		for(let i = 0; i < begin.length; i++) {
			let bChar = begin[i];
			let eChar = end[i];
			if (bChar !== eChar) {
				diff++;
			}
		}
		return diff === 1;
	}

	const canTransformList = (wordLists) => {
		for(let i = 0; i < wordLists.length; i++) {
			let base = wordLists[i];
			let temp = []
			for(let j = 0; j < wordLists.length; j++) {
				if (i === j) continue;
				let next = wordLists[j];
				if (canTransform(base, next)) {
					temp.push(next);
				}
			}
			wordListMap[base] = temp;
		}
	}

	// 用于得到level
	const bsf = () => {
		let ans = [];
		let map = {};
		let isFound = false;
		let stack = [];
		map[beginWord] = 1;
		stack.push([beginWord]);

		while (stack.length) {
			let size = stack.length;
			let tempVisitedMap = {};
			for(let i = 0; i < size; i++) {
				let tempPath = stack.shift();
				let lastChar = tempPath[tempPath.length - 1];
				let canUseList = [...wordListMap[lastChar]];
				while (canUseList.length) {
					let char = canUseList.shift();
					if (!map[char]) {
						let t = [...tempPath, char]
						stack.push(t);
						if (char === endWord) {
							isFound = true;
							ans.push(t);
						}
						tempVisitedMap[char] = 1;
					}
				}
			}

			Object.assign(map, tempVisitedMap);
			if (isFound) break;
		}
		// console.log(stack, 'stack')
		return ans;
	}

	!wordList.includes(beginWord) && wordList.push(beginWord);
	
	canTransformList(wordList);
	// console.log(wordListMap)

	return bsf();

};
// @lc code=end

let beginWord = "qa";
let endWord = "sq";
let wordList = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
// let beginWord = "hit";
// let endWord = "cog";
// let wordList = ["hot","dot","dog","lot","log","cog"];
// let beginWord = "red";
// let endWord = "tax";
// let wordList = ["ted","tex","red","tax","tad","den","rex","pee"];

let list = findLadders(beginWord, endWord, wordList);
let listSize = list.length;

let str = list.map(item => item.toString());

let setList = new Set(str);


console.log(listSize, setList.size)
console.log(list)


