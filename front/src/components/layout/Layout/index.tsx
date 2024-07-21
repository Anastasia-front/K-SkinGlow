import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));

function Layout() {
	return (
		<>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Footer />
		</>
	);
}

export default Layout;
