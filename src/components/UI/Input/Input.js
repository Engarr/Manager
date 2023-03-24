import React from 'react';
import classes from './Input.module.css';

const Input = ({ type, data, text, onChange, value, isError }) => {
	const errorCss = isError ? classes.error : '';

	return (
		<div className={`${classes.inputBox} ${errorCss}`}>
			<input
				type={type}
				id={data}
				name={data}
				className={`${classes.input} `}
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
