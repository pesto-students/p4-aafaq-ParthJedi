import React from 'react';

function TodoItem({ item, todo, addTodo }) {
	const [done, setDone] = React.useState(false);
	let filteredList = [];

	function deleteTodo() {
		if (todo.length > 0) {
			filteredList = todo.filter((todoItem) => todoItem.id !== item.id);
		} else return;
		addTodo(filteredList);
	}

	function handleToggleDone() {
		const itemDiv = document.getElementById(`todoItemDiv-${item.id}`);
		setDone(!done);
		if (itemDiv) {
			itemDiv.style.textDecoration = !done ? 'line-through' : '';
		}
	}

	return (
		<>
			<div className='todoPill'>
				<span className='strikedColumn'>ToDo: </span>
				<span id={`todoItemDiv-${item.id}`}>
					"<em>{item.name}</em>"
				</span>
				&nbsp;&nbsp;
				<span className='strikedColumn'>
					Done:
					<input
						type='checkbox'
						defaultChecked={false}
						onChange={handleToggleDone}
					/>
					<br />
					<br />
					{done ? (
						<>
							<span>
								<em>Do you want to delete this item? </em>
							</span>
							<br />
							<button className='deleteBtn' onClick={deleteTodo}>
								Delete
							</button>
						</>
					) : null}
				</span>
			</div>
			<br />
		</>
	);
}

export default TodoItem;
