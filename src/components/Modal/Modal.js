import React from 'react';
import { ReactDOM } from 'react-dom';
import classes from './Modal.module.css';

const Modal = () => {
	return ReactDOM.cretePortal(
		<div className={classes.backdrop}></div>,
		document.getElementById('backdrop')
	);
};

export default Modal;
