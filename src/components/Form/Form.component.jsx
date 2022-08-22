import React from 'react';
import './Form.styles.scss';

const Form = ({ Label, Type, Name, Value, OnChange, Placeholder }) => {
	return (
		<>
			<div className="form-group">
				<label>{Label}</label>
				<input
					type={Type}
					className="form-control"
					name={Name}
					value={Value}
					onChange={OnChange}
					placeholder={Placeholder}
					required
				/>
			</div>
		</>
	);
};

export default Form;
