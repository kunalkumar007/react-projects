import React from 'react';

const ToDoList = ({ tasks, remove }) => {
	return (
		<div className="child-borders">
			{tasks.map((task, id) => {
				return (
					<div
						className={
							'padding-small margin-small ' +
							(task.completed ? 'background-primary' : 'shadow shadow-hover')
						}
						key={id}
						style={task.completed ? { textDecoration: 'line-through' } : {}}
						onClick={() => remove(id)}
					>
						{task.text}
					</div>
				);
			})}
		</div>
	);
};

export default ToDoList;
