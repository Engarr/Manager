import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = (props: { handler: () => void }) => {
	return ReactDOM.createPortal(
		<div className={classes.backdrop} onClick={props.handler}></div>,
		document.getElementById('backdrop') as HTMLElement
	);
};

export default Modal;
