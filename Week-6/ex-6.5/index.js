const pairWithDifference = (nums, k) => {
	const set = new Set(nums);

	for (const i in nums) {
		if (set.has(nums[i] - k)) {
			return 1;
		}
	}

	return 0;
};

console.log(pairWithDifference([5, 10, 3, 2, 50, 80], 78)); //1
console.log(pairWithDifference([10, 20], 30)); // 0
