import { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import { icons } from 'src/assets';

import { Icon } from '../Icon';

import { Brand, Container, Favorite, ImageWrapper, Name, Price, PriceInfo } from './styles';
import { ProductCardProps } from './types';

export const ProductCard: FC<ProductCardProps> = ({ imagePath, width, productName, brand, price }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavoriteToggle = () => {
		setIsFavorite(!isFavorite);
	};

	return (
		<Container>
			<ImageWrapper>
				<Link to="/">
					<img src={imagePath} alt="product" width={width} height="355" />
				</Link>
				<Favorite width={24} height={24} $isFavorite={isFavorite.toString()} onClick={handleFavoriteToggle}>
					<use href={icons.sprite + '#favorite'} />
				</Favorite>
			</ImageWrapper>
			<div>
				<Name to="/">{productName}</Name>
				<Brand>{brand}</Brand>
				<PriceInfo>
					<Price>{price} UAH</Price>
					<Icon name="bag" />
				</PriceInfo>
			</div>
		</Container>
	);
};
