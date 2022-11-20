import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
	const inputTodoRef = React.useRef(null);
	const [todo, addTodo] = React.useState([]);
	const todoValue = {};

	function handleTodoAddition() {
		todoValue.id = Date.now();
		todoValue.name = inputTodoRef.current.value;
		if (todoValue.name === '') {
			window.alert('Please Enter a Valid Value');
			return null;
		} else {
			addTodo((prevTodo) => {
				return [...prevTodo, todoValue];
			});
			inputTodoRef.current.value = null;
		}
	}

	return (
		<div className='App'>
			<h1>TodoList Assignment</h1>
			<div className='todo-input'>
				<label>Add your todo list:</label>
				&nbsp;&nbsp;&nbsp;
				<input
					type='text'
					className='textAreaInput'
					placeholder='enter a todo item'
					ref={inputTodoRef}
				/>
				&nbsp;&nbsp;&nbsp;
				<button onClick={handleTodoAddition}>Submit</button>
			</div>
			<hr />
			<TodoList todo={todo} addTodo={addTodo} />
		</div>
	);
}

export default App;
