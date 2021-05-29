import { useState } from 'react';
import './App.css';
import AddToDo from './components/addToDo';
import Filter from './components/Filter';
import ToDoList from './components/toDoList';

window.id = 0;

function App() {
	const [value, setvalue] = useState('');
	const [tasks, settasks] = useState([]);
	const handleChange = (e) => setvalue(e.target.value);
	const handleTasks = (val) => {
		let customTask = { text: val, completed: false, id: window.id++ };
		settasks((task) => [...task, customTask]);
	};
	const handleCleartasks = () => {
		settasks([]);
		window.location.reload();
	};
	const handleClick = (id) => {
		console.log(id);
		let modifiedTasks = tasks.map((task) => {
			if (task.id === id) {
				return Object.assign({}, task, { completed: !task.completed });
			}
			return task;
		});
		settasks(modifiedTasks);
	};

	return (
		<div className="row flex-center flex-middle flex">
			<div className="border border-primary padding-large margin-large no-responsive paper">
				<h3>Narries ToDo</h3>
				<AddToDo onChange={handleChange} value={value} onAdd={handleTasks} />
				<ToDoList tasks={tasks} remove={handleClick} />
				<Filter onClear={handleCleartasks} />
			</div>
		</div>
	);
}

export default App;
