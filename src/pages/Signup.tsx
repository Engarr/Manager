import React, { useState, useEffect } from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});
	const [isErrors, setIsErrors] = useState({
		name: false,
		email: false,
		password: false,
		repeatPassword: false,
	});

	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

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
	useEffect(() => {
		const newValidation = {};
		Object.keys(errors).forEach((key) => {
			newValidation[key] = errors[key] !== '';
		});
		setIsErrors(newValidation);
	}, [errors]);

	async function registerUser(e) {
		e.preventDefault();
		setIsLoading(true);
		const response = await fetch('http://localhost:8080/auth/signup', {
			method: 'PUT',
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
		const data = await response.json();
		if (response.ok) {
			toast.success('User has been created!');
			navigate('/login');
		} else {
			toast.error('Registration failed');
			const errorObject = {};
			data.errors.forEach((error) => {
				errorObject[error.param] = error.msg;
			});
			setErrors(errorObject);
		}
		setIsLoading(false);
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
						isError={isErrors.email}
					/>
					{errors.email && <p className={classes.error}>{errors.email}</p>}
					<Input
						type={'text'}
						data={'name'}
						value={formData.name}
						text={'Name'}
						onChange={formDataHandler}
						isError={isErrors.name}
					/>
					{errors.name && <p className={classes.error}>{errors.name}</p>}
					<Input
						type={'password'}
						data={'password'}
						value={formData.password}
						text={'Password'}
						onChange={formDataHandler}
						isError={isErrors.password}
					/>
					{errors.password && (
						<p className={classes.error}>{errors.password}</p>
					)}
					<Input
						type={'password'}
						data={'repeatPassword'}
						value={formData.repeatPassword}
						text={'Repeat Password'}
						onChange={formDataHandler}
						isError={isErrors.repeatPassword}
					/>
					{errors.repeatPassword && (
						<p className={classes.error}>{errors.repeatPassword}</p>
					)}
					<button type='submit' value='Register' className={classes.btn}>
						{!isLoading ? 'Register' : <div className={classes.loader}></div>}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
