import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import RootLayout from './pages/Root';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/login', element: <Login /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
