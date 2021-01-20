var transpose = function(A) {
	let row = A.length;
	let col = A[0].length;
	let res = [];
	for(let newRow = 0; newRow < col; newRow ++) {
		res[newRow] = [];
		for(let newCol = 0; newCol < row; newCol ++) {
			res[newRow].push(A[newCol][newRow]);
		}
	}
	return res;
}

let temp1 = [[1,2,3],[4,5,6],[7,8,9]];
let temp2 = [[1,2,3],[4,5,6]];

console.log(transpose(temp1) , transpose(temp2) );