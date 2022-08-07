function createIncrement() {
	let count = 0;
	function increment() {
		count++;
	}
	let message = `Count is ${count}`;
	function log() {
		console.log(message);
	}
	return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// Output: "Count is 0"

// On calling createIncrement() function at line 12,
// both the inner functions are called synchronously, so then the count = 0 value is stored in the message variable.
// the consecutive calls to increment have no impact on the value of message.
// then we call the log() function and log the unchanged value.
