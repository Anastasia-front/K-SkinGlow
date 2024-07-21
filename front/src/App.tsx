import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cart = lazy(() => import('./pages/Cart'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Category = lazy(() => import('./pages/Category'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Home = lazy(() => import('./pages/Home'));
const Layout = lazy(() => import('./components/layout/Layout'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OrderDelivery = lazy(() => import('./pages/OrderDelivery'));
const Product = lazy(() => import('./pages/Product'));

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route index path="/catalog" element={<Catalog />} />
				<Route index path="/product/:id" element={<Product />} />
				<Route index path="/order-delivery" element={<OrderDelivery />} />
				<Route index path="/favorites" element={<Favorites />} />
				<Route index path="/cart" element={<Cart />} />
				<Route index path="/category/:name" element={<Category />} />
				<Route index path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
