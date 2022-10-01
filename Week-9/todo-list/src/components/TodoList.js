import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todo, addTodo }) {
	return todo.length > 0
		? todo.map((item) => (
				<div key={item.id}>
					<TodoItem item={item} todo={todo} addTodo={addTodo} />
				</div>
		  ))
		: null;
}

export default TodoList;
