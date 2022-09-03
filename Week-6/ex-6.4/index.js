const maxProfit = function (prices) {
	if (prices.length === 0) {
		return 0;
	}

	let lowestCost = prices[0];
	let profit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < lowestCost) lowestCost = prices[i];

		if (prices[i + 1] - lowestCost > profit)
			profit = prices[i + 1] - lowestCost;
	}

	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // profit = 6-1 =5
console.log(maxProfit([7, 6, 4, 3, 1])); // profit = 0
