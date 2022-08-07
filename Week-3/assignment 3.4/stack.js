const createStack = () => {
	let items = [];

	return {
		push(item) {
			items.push(item);
		},
		pop() {
			items.pop();
		},
		getItems() {
			console.log(items);
		}
	};
};
const stack = createStack();
