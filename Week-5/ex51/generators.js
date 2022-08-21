var userList = [
	{
		id: 1,
		name: 'Chirag Udeshi',
		username: 'ChiragU',
		email: 'chirag@gmail.com'
	},
	{
		id: 10,
		name: 'Parth Joshi',
		username: 'ParthJ',
		email: 'parth@gmail.com'
	}
];

function* getUserName(userList) {
	let id = 1;
	while (id <= 10) {
		let userName = userList.filter((x) => x.id == id).name;
		yield userName;
		id++;
	}
}

const userNameGenObj = getUserName(userList);
userNameGenObj.next();
userNameGenObj.next();
