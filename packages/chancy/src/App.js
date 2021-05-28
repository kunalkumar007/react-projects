import './App.css';
import Editor from 'components/editor';
import MarkdownEditor from 'components/markdownEditor';
import { useState } from 'react';

function App() {
	const [value, setvalue] = useState('Type Some Markdown here . . .');
	const changehandler = (e) => setvalue(e.target.value);
	return (
		<div className="App">
			<Editor onChange={changehandler} value={value} />
			<MarkdownEditor data={value} />
		</div>
	);
}

export default App;
