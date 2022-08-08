// explicit binding of this is done using the bind method
// with the .bind method the 'this' context can be bound permanently to a specific object.

function sum(a, b) {
	return this.a + this.b;
}

const obj = {
	a: 35,
	b: 15
};

sum.bind(obj); // 50

sum.bind({a: 10, b: 20}); // still 50 as the first bind value is permanent in nature
