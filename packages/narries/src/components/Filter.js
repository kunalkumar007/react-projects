import React from 'react';
import { useState } from 'react';

export default function Filter() {
	const [todosLength, settodosLength] = useState(true);
	return (
		<div className="row flex-edges">
			<div className="col padding-small">
				<button
					className="btn-small"
					style={todosLength ? {} : { display: 'none' }}
					// onClick={onClickClear}
				>
					Clear
				</button>
			</div>
			<div className="col padding-small">
				<div className="row flex-right margin-none">
					<span className="padding-right-small">Show:</span>
					<select
					// onChange={onChangeFilter}
					>
						<option>All</option>
						<option>Active</option>
						<option>Completed</option>
					</select>
				</div>
			</div>
		</div>
	);
}
