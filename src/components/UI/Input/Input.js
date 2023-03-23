import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, data, text, onChange, value }) => {
	return (
		<div className={classes.inputBox}>
			<input
				type={type}
				id={data}
				name={data}
				className={classes.input}
				placeholder={text}
				value={value}
				onChange={onChange}
			/>
			<label htmlFor={data} className={classes.label}>
				{text}
			</label>
		</div>
	);
};

export default Input;
