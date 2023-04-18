import { useState, useRef } from 'react';
import { Link, Form } from 'react-router-dom';

import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineCloseSquare,
	AiOutlineUserAdd,
	AiOutlineLogout,
} from 'react-icons/ai';
import { SiGoogletagmanager } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import classes from './Nav.module.css';
import Modal from '../Modal/Modal';

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [accountMenu, setAccountMenu] = useState(false);
	const optionRef = useRef(null);

	const showMenuHandler = () => {
		setShowMenu((prev) => (prev = !prev));

		switchClass();
	};
	const acountHandler = () => {
		setAccountMenu((prev) => (prev = !prev));
	};
	const switchClass = () => {
		const menu = document.querySelector(
			`.${classes.mainContainer}`
		) as HTMLElement;
		const animateCss = `${classes.active}`;

		menu.classList.add(animateCss);
		setTimeout(() => {
			menu.classList.remove(animateCss);
		}, 10);
	};

	

	return (
		<div className={classes.mainContainer}>
			<div className={classes.NavContainer}>
				<div className={classes.logo}>
					<Link to='/'>
						<SiGoogletagmanager className={classes.icon} />
						<h2>Manager</h2>
					</Link>
				</div>

				<GiHamburgerMenu className={classes.burger} onClick={showMenuHandler} />

				<div className={classes.optionContainer}>
					<div>
						<Link to='/'>
							<AiOutlineHome className={classes.optionIcon} />
						</Link>
					</div>

					<div onClick={acountHandler}>
						<AiOutlineUser className={classes.optionIcon} />
					</div>
				</div>

				<div
					className={`${classes.accountOption} ${
						accountMenu ? classes.accountOptionActive : ''
					}`}
					ref={optionRef}>
					<div onClick={acountHandler}>
						<Link to='/login'>
							<AiOutlineUser className={classes.iconMenu} />
							<p>Login</p>
						</Link>
					</div>
					<div onClick={acountHandler}>
						<Link to='/signup'>
							<AiOutlineUserAdd className={classes.iconMenu} />
							<p>Register</p>
						</Link>
					</div>
					<div onClick={acountHandler}>
						<Form action='/logout' method='post'>
							<button className={classes.logoutBtn}>
								<AiOutlineLogout className={classes.iconMenu} />
								<p>Logout</p>
							</button>
						</Form>
					</div>
				</div>
			</div>

			{showMenu && (
				<>
					<Modal handler={showMenuHandler} />
				</>
			)}
			<div
				className={`${classes.menuContainer} ${
					showMenu ? classes.active : ''
				}`}>
				<div className={`${classes.logo} ${classes.logoMenu}`}>
					<SiGoogletagmanager className={classes.icon} />
					<h2>Manager</h2>
				</div>
				<AiOutlineCloseSquare
					className={classes.close}
					onClick={showMenuHandler}
				/>
				<div className={classes.menuOptions}>
					<div className={classes.box} onClick={showMenuHandler}>
						<Link to='/'>
							<AiOutlineHome className={classes.optionIcon} />
							<p>Home</p>
						</Link>
					</div>
					<div>
						<Link to='/login' onClick={showMenuHandler}>
							<AiOutlineUser className={classes.optionIcon} />
							<p>Login</p>
						</Link>
					</div>
					<div>
						<Link to='/login' onClick={showMenuHandler}>
							<AiOutlineUserAdd className={classes.optionIcon} />
							<p>Signup</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
