const mathOperations = require('./index.js');

describe('Test suite for calculator functions', () => {
	test('Test for summation', () => {
		const value = mathOperations.sum(9, 16);
		expect(value).toBe(25);
	});
	test('Test for difference', () => {
		const value = mathOperations.diff(5, 5);
		expect(value).toBe(0);
	});
	test('Test for multiplication', () => {
		const value = mathOperations.product(2, 2);
		expect(value).toBe(4);
	});
});
