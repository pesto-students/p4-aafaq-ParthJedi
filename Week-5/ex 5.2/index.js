const isVowel = (alphabet) => {
	return 'aeiou'.includes(alphabet);
};

const vowelCount = (str) => {
	const frequencyMap = new Map();
	for (let char of str) {
		let lowerChar = char.toLowerCase();
		if (isVowel(lowerChar)) {
			if (frequencyMap.has(lowerChar)) {
				frequencyMap.set(lowerChar, frequencyMap.get(lowerChar) + 1);
			} else {
				frequencyMap.set(lowerChar, 1);
			}
		}
	}
	return frequencyMap;
};

let sampleString = 'awsdrfcfrfghyujnbgvbnjkioloiuytuioplkmeeeenvcfdewasxc';
vowelCount(sampleString); // Output: Map(5) { 'a' => 2, 'u' => 3, 'i' => 3, 'o' => 3, 'e' => 5 }
