import React from 'react';

export default ({ input, label }) => {

	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input name={label} {...input} />
		</div>
	);
};