import React from 'react';

const AddToDO = (props) => {
	return (
		<div className="row">
			<div className="col padding-right-small">
				<input type="text" placeholder="New Todo" value={props.value} onChange={props.onChange} />
			</div>
			<div className="col padding-left-small">
				<button value="Add" className="paper-btn btn-small" onClick={() => props.onAdd(props.value)}>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddToDO;
