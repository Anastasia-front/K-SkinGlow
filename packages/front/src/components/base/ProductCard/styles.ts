import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

interface FavoriteProps {
	$isFavorite: string;
}

export const Container = styled.div`
	position: relative;
	height: 100%;
	transition: box-shadow var(--animation), transform var(--animation);

	&:hover,
	&:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		transform: translateY(-1px);
	}
`;

export const Favorite = styled.svg<FavoriteProps>`
	position: absolute;
	top: 16px;
	right: 16px;
	fill: ${({ $isFavorite }) => ($isFavorite === 'true' ? 'var(--color-black)' : 'transparent')};
	cursor: pointer;
`;

export const ImageWrapper = styled.div`
	margin-bottom: 16px;
`;

export const Name = styled(NavLink)`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	margin-bottom: 8px;
	transition: transform var(--animation);

	&:hover,
	&:focus {
		text-decoration: underline;
		font-weight: 500;
	}
`;

export const Brand = styled.p`
	font-size: 16px;
	line-height: 1.5;
	color: var(--color-dark-gray);
	margin-bottom: 16px;
`;

export const PriceInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.p`
	font-size: 24px;
	font-weight: 500;
	line-height: 1.5;
	text-transform: capitalize;
`;
