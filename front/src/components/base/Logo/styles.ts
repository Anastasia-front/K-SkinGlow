import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

import { LogoProps } from './types';

export const LogoContainer = styled.div<LogoProps>`
	height: ${({ $location }) => ($location === 'header' ? '52px' : $location === 'footer' ? '44px' : '40px')};
	left: ${({ $location }) => ($location === 'header' ? '50%' : $location === 'footer' ? '15%' : 'none')};
	position: ${({ $location }) => ($location === 'header' ? 'absolute' : '')};
	top: ${({ $location }) => ($location === 'header' ? '50%' : $location === 'footer' ? '40%' : 'none')};
	transform: ${({ $location }) => ($location === 'header' ? 'translate(-50%, -50%)' : '')};
	width: 255px;
	background-color: ${({ $location }) =>
		$location === 'header' ? 'var(--color-black)' : $location === 'footer' ? ' var(--color-white)' : 'none'};
	color: ${({ $location }) =>
		$location === 'header'
			? ' var(--color-white)'
			: $location === 'footer'
			? 'var(--color-black)'
			: 'var(--color-black)'};
`;

export const StyledLink = styled(NavLink)`
	font-family: var(--font-secondary);
	font-size: 40px;
	font-weight: 500;
	line-height: 1.3;
`;
