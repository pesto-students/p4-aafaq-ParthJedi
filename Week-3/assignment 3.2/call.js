// .call is also used to change the context of the 'this'in an explicit manner(providing the context).
// it also takes positional agument list

function weather() {
	return `The ${this.weather} requires you to ${this.remedy}`;
}

const obj = {
	weather: 'hot and dry',
	remedy: 'drink lots of water'
};

weather.call(obj);
