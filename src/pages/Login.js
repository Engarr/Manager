import React, { useState, useEffect } from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';
import { toast } from 'react-hot-toast';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const formDataHandler = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
		setErrors((prevErr) => ({
			...prevErr,
			[e.target.name]: '',
		}));
	};
	const [isErrors, setIsErrors] = useState({
		name: false,
		email: false,
	});
	useEffect(() => {
		const newValidation = {};
		Object.keys(errors).forEach((key) => {
			newValidation[key] = errors[key] !== '';
		});
		setIsErrors(newValidation);
	}, [errors]);

	async function loginUser(e) {
		e.preventDefault();
		const response = await fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: formData.email,
				password: formData.password,
			}),
		});
		const data = await response.json();
		if (response.ok) {
			console.log(data);
			const token = data.token;
			localStorage.setItem('token', token);
		} else {
			toast.error('Login failed');
			const errorObject = {};
			data.errors.forEach((error) => {
				errorObject[error.param] = error.msg;
			});
			setErrors(errorObject);
		}
	}

	return (
		<div className={classes.mainContainer}>
			<form className={classes.formContainer} onSubmit={loginUser}>
				<h2>Login</h2>
				<div>
					<Input
						type={'email'}
						data={'email'}
						value={formData.email}
						text={'E-mail'}
						onChange={formDataHandler}
						isError={isErrors.email}
					/>
					{errors.email && <p className={classes.error}>{errors.email}</p>}
					<Input
						type={'password'}
						data={'password'}
						value={formData.email}
						text={'Password'}
						onChange={formDataHandler}
						isError={isErrors.password}
					/>
					{errors.password && (
						<p className={classes.error}>{errors.password}</p>
					)}
					<button type='submit' className={classes.btn}>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
