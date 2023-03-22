import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, id, data, text }) => {
	return (
		<div className={classes.inputBox}>
			<input
				type={type}
				id={data}
				name={data}
				required
				className={classes.input}
				placeholder={text}
			/>
			<label htmlFor={data} className={classes.label}>
				{text}
			</label>
		</div>
	);
};

export default Input;
