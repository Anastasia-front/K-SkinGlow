import { FC, useEffect, useState } from 'react';

import axios from 'axios';
import { FetchDataProps } from './types';

export interface Product {
	id: number;
	title: string;
	description: string;
	images: string;
	price: number;
	category_id: number;
	volume: string;
	brand_id: number;
	reviews_count: number;
	average_rating: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
	try {
		const response = await axios.get<Product[]>('http://localhost:3000/products');
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
};

export const FetchData: FC<FetchDataProps> = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const products = await fetchProducts();
				setProducts(products);
			} catch (error) {
				setError('Failed to fetch products');
			} finally {
				setLoading(false);
			}
		};

		getProducts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>Product List</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<img src={product.images} alt={product.title} />
						<p>Price: ${product.price}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
