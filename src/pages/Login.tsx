import React, { useState, useEffect } from 'react';
import classes from '../style/Login.module.css';
import Input from '../components/UI/Input/Input';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	interface FormData {
		password: string;
		email: string;
	}
	interface FormErrors {
		email: boolean;
		password: boolean;
	}
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormData>({
		email: '',
		password: '',
	});

	const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
		setErrors((prevErr) => ({
			...prevErr,
			[e.target.name]: '',
		}));
	};
	const [isErrors, setIsErrors] = useState<FormErrors>({
		email: false,
		password: false,
	});
	useEffect(() => {
		const newValidation: FormErrors = {
			password: false,
			email: false,
		};

		Object.keys(errors).forEach((key) => {
			newValidation[key as keyof FormErrors] =
				errors[key as keyof FormErrors] !== '';
		});
		setIsErrors(newValidation);
	}, [errors]);

	async function loginUser(e: React.FormEvent) {
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
			console.log(data.token);
			const token = await data.token;
			localStorage.setItem('token', token);
			navigate('/');
			toast.success('You are logged in');
		} else {
			toast.error('Login failed');
			const errorObject: FormData = {
				email: '',
				password: '',
			};
			data.errors.forEach((error: { param: keyof FormErrors; msg: string }) => {
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
						value={formData.password}
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
