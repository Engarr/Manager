import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { SiGoogletagmanager } from 'react-icons/si';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<div className={classes.mainContainer}>
			<div className={classes.NavContainer}>
				<div className={classes.logo}>
					<SiGoogletagmanager className={classes.icon} />
					<h2>Manager</h2>
				</div>
				<div className={classes.optionContainer}>
					<Link to='/'>
						<AiOutlineHome className={classes.optionIcon} />
					</Link>
					<Link to='/login'>
						<AiOutlineUser className={classes.optionIcon} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
