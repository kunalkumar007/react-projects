import { useState, useEffect } from 'react';
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
		tasks.push({ text: val, completed: false, id: window.id++ });
		settasks(tasks);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	};

	return (
		<div className="row flex-center flex-middle flex">
			<div className="border border-primary padding-large margin-large no-responsive paper">
				<h3>Narries ToDo</h3>
				<AddToDo onChange={handleChange} value={value} onAdd={handleTasks} />
				<ToDoList tasks={tasks} />
				<Filter />
			</div>
		</div>
	);
}

export default App;
