import React from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';

const Signup = () => {
	return (
		<div className={classes.mainContainer}>
			<form className={classes.formContainer}>
				<h2>SignUp</h2>
				<div>
					<Input type={'email'} data={'email'} text={'E-mail'} />
					<Input type={'text'} data={'username'} text={'Name'} />
					<Input type={'text'} data={'password'} text={'Password'} />
					<Input
						type={'text'}
						data={'repeat-password'}
						text={'Repeat Password'}
					/>
					<button type='submit' className={classes.btn}>
						SignUp
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
