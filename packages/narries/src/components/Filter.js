import React from 'react';

export default function Filter({ onClear, onChangeFilter }) {
	return (
		<div className="row flex-edges">
			<div className="col padding-small">
				<button className="btn-small" onClick={onClear}>
					Clear
				</button>
			</div>
			<div className="col padding-small">
				<div className="row flex-right margin-none">
					<span className="padding-right-small">Show:</span>
					<select onChange={onChangeFilter}>
						<option>All</option>
						{/* <option>Active</option> */}
						{/* <option>Completed</option> */}
					</select>
				</div>
			</div>
		</div>
	);
}
