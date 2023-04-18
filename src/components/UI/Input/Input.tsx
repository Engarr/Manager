import React from 'react';
import classes from './Input.module.css';
import { InputType } from '../../../model/inputType';

const Input = (props: InputType) => {
	const errorCss = props.isError ? classes.error : '';

	return (
		<div className={`${classes.inputBox} ${errorCss}`}>
			<input
				type={props.type}
				id={props.data}
				name={props.data}
				className={`${classes.input} `}
				placeholder={props.text}
				value={props.value}
				onChange={props.onChange}
			/>
			<label htmlFor={props.data} className={classes.label}>
				{props.text}
			</label>
		</div>
	);
};

export default Input;
