import React from 'react';
import classes from './Input.Module.css';
const Input = () => {
	return (
		<div className={classes.inputBox}>
			<input
				type='text'
				id='username'
				name='username'
				required
				className={classes.input}
			/>
			<label for='username' className={classes.label}>
				
			</label>
		</div>
	);
};

export default Input;
