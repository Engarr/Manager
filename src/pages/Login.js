import React from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';

const Login = () => {
	return (
		<div className={classes.mainContainer}>
			<div className={classes.formContainer}>
				<form className={classes.form}>
					<h2>Login</h2>
					<div>
						<Input type={'text'} id={'username'} text={'Name'} />
						<Input type={'text'} id={'Password'} text={'Password'} />
						<button type='submit' className={classes.btn}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
