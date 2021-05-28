import React from 'react';

export default function editor(props) {
	return (
		<div className="container">
			<h1 className="heading">Editor</h1>
			<textarea className="editorInput" onChange={props.onChange} value={props.value}></textarea>
		</div>
	);
}
