const getSpiralPath = function (matrix) {
	const spiralPath = [];

	if (!matrix.length) return spiralPath;

	let rowStart = 0;
	let rowEnd = matrix.length - 1;
	let colStart = 0;
	let colEnd = matrix[0].length - 1;

	while (colStart <= colEnd && rowStart <= rowEnd) {
		for (let i = colStart; i <= colEnd; i++) {
			spiralPath.push(matrix[rowStart][i]);
		}
		rowStart++;

		for (let i = rowStart; i <= rowEnd; i++) {
			spiralPath.push(matrix[i][colEnd]);
		}
		colEnd--;

		if (rowStart <= rowEnd) {
			for (let i = colEnd; i >= colStart; i--) {
				spiralPath.push(matrix[rowEnd][i]);
			}
		}
		rowEnd--;

		if (colStart <= colEnd) {
			for (let i = rowEnd; i >= rowStart; i--) {
				spiralPath.push(matrix[i][colStart]);
			}
		}
		colStart++;
	}
	return spiralPath;
};

console.log(
	getSpiralPath([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])
); // [1,2,3,6,9,8,7,4,5]
