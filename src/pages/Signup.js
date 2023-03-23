import React, { useState } from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';

const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const formDataHandler = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	async function registerUser(e) {
		e.preventDefault();
		await fetch('http://localhost:8080/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: formData.name,
				email: formData.email,
				password: formData.password,
				repeatPassword: formData.repeatPassword,
			}),
		});
		const data = await Response.json();
		console.log(data);
	}

	return (
		<div className={classes.mainContainer}>
			<form className={classes.formContainer} onSubmit={registerUser}>
				<h2>Register</h2>
				<div>
					<Input
						type={'email'}
						data={'email'}
						value={formData.email}
						text={'E-mail'}
						onChange={formDataHandler}
					/>
					<Input
						type={'text'}
						data={'name'}
						value={formData.name}
						text={'Name'}
						onChange={formDataHandler}
					/>
					<Input
						type={'text'}
						data={'password'}
						value={formData.password}
						text={'Password'}
						onChange={formDataHandler}
					/>
					<Input
						type={'text'}
						data={'repeatPassword'}
						value={formData.repeatPassword}
						text={'Repeat Password'}
						onChange={formDataHandler}
					/>
					<button type='submit' value='Register' className={classes.btn}>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
