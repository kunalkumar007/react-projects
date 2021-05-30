import React from 'react';
import { Remarkable } from 'remarkable';
export default function markdownEditor(props) {
	let md = new Remarkable();
	const createMarkup = () => {
		return { __html: md.render(props.data) };
	};

	return (
		<div className="container">
			<h1 className="heading">Markdown</h1>
			<div className="markdownOutput" dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
}
