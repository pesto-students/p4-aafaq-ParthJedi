const getUserName = async (id) => {
	const userList = await getAllUsers();
	const userDetails = await getUserDetails(userList, id);
	const useName = await extractUserName(userDetails);
	return useName;
};

async function getAllUsers() {
	const userList = (
		await fetch('https://jsonplaceholder.typicode.com/users')
	).json();
	return userList;
}

function getUserDetails(userList, id) {
	const userDetails = userList.filter((x) => x.id == id);
	return userDetails;
}

function extractUserName(userDetails) {
	return userDetails[0].name;
}

var userName = getUserName(4);
