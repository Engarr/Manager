import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Toaster />
			<App />
		</React.StrictMode>
	</Provider>
);
