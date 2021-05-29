import React, { useState } from 'react';

const ToDoList = () => {
	const tasks = localStorage.getItem('tasks') || '[]';
	const [key, setkey] = useState({});
	const todo = JSON.parse(tasks);
	console.log(todo);
	const remove = (e) => {
		console.log(e);
		setkey(e.id);
	};
	return (
		<div className="child-borders">
			{todo.map((task, id) => {
				return (
					<div
						className={
							'padding-small margin-small ' +
							(task.completed ? 'background-primary' : 'shadow shadow-hover')
						}
						key={id}
						onClick={() => remove(task)}
						// style={completed ? { textDecoration: 'line-through' } : {}}
					>
						{task.text}
					</div>
				);
			})}
		</div>
	);
};

export default ToDoList;
