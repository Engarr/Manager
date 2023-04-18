import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const RootLayout = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
