import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
	const inputTodoRef = React.useRef(null);
	const [todo, addTodo] = React.useState([]);

	function handleTodoAddition() {
		const todoValue = inputTodoRef.current.value;
		if (todoValue === '') {
			window.alert('Please Enter a Valid Value');
			return null;
		} else {
			addTodo((prevTodo) => {
				return [...prevTodo, todoValue];
			});
			console.log(todo);
			inputTodoRef.current.value = null;
		}
	}

	return (
		<div className='App'>
			<header>TodoList Assignment</header>
			<hr />
			<div className='todo-input'>
				<label>Add your todo list: </label>
				<input type='text' placeholder='enter a todo item' ref={inputTodoRef} />
				<button onClick={handleTodoAddition}>Submit</button>
			</div>
			<hr />
			{todo}
			<TodoList />
		</div>
	);
}

export default App;
