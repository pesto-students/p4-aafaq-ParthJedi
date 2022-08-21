const sampleArray = [1, 2, 10, 89, 2, 70, 10];

const hasDuplicate = (array) => {
	if (array.length != new Set(array).size) {
		return true;
	} else {
		return false;
	}
};

hasDuplicate(sampleArray); // Output: true
