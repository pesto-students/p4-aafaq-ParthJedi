const createStack = () => {
	return (function () {
		return {
			items: [],
			push(item) {
				this.items.push(item);
			},
			pop() {
				this.items.pop();
			},
			getItems() {
				console.log(this.items);
			}
		};
	})();
};
const stack = createStack();
