import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import RootLayout from './pages/Root';
import { action as logoutaAction } from './pages/Logout';
import { tokenLoader } from './util/auth';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			id: 'root',
			loader: tokenLoader,
			children: [
				{ path: '/', element: <Home /> },
				{ path: 'login', element: <Login /> },
				{ path: 'signup', element: <Signup /> },
				{ path: 'logout', action: logoutaAction },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
