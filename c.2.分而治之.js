// 假设你是农场主，有一小块土地。
// 你要将这块地均匀地分成方块，且分出的方块要尽可能大

var averageBlock = function(width, height) {
	let maxLen = Math.max(width, height);
	let minLen = Math.min(width, height);

	let mod = maxLen % minLen;
	
	if (mod === 0) {
		// 整除
		return minLen;
	} else {
		return averageBlock(mod, minLen);
	}
}

console.log(`每块大小：${averageBlock(1680, 640)}, 一共：${1680 * 640 / (averageBlock(1680, 640) * averageBlock(1680, 640))}`)
console.log(`每块大小：${averageBlock(1680, 10)}, 一共：${1680 * 10 / (averageBlock(1680, 10) * averageBlock(1680, 10))}`)