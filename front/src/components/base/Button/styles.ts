/* eslint-disable indent */

import { styled } from 'styled-components';
import { ButtonPropsType } from './types';

export const StyledButton = styled.button<Partial<ButtonPropsType>>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 220px;
	height: 50px;
	padding: 12px 24px;
	color: ${({ $color }) => $color};
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	cursor: pointer;

	color: ${({ color }) => color};
	font-size: 16px;
	line-height: 1.5;
	text-align: center;

	border: ${({ $color }) => ($color === 'var(--color-black)' ? '1px solid var(--color-black)' : 'none')};
	transition: color var(--animation), background-color var(--animation), border var(--animation);

	&:hover,
	&:focus {
		color: ${({ $color }) => ($color === 'var(--color-white)' ? 'var(--color-black)' : 'var(--color-white)')};
		background-color: ${({ $backgroundColor }) =>
			$backgroundColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-black)'};
		border: ${({ $color }) => ($color === 'var(--color-white)' ? '1px solid var(--color-black)' : 'none')};
	}
`;
