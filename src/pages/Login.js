import React from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';

const Login = () => {
	return (
		<div className={classes.mainContainer}>
			<div className={classes.formContainer}>
				<form>
					<h2>Login</h2>
					<div className={classes.inputBox}>
						<Input />
						<input
							type='text'
							id='username'
							name='username'
							required
							className={classes.input}
						/>
						<label for='username' className={classes.label}>
							Nazwa użytkownika:
						</label>
					</div>

					{/* <button type='submit'>Login</button> */}
				</form>
			</div>
		</div>
	);
};

export default Login;
