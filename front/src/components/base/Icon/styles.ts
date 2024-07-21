import styled from 'styled-components';

import { IconProps } from './types';

export const StyledIcon = styled.svg<Partial<IconProps>>`
	cursor: pointer;
	transition: transform var(--animation);
	fill: ${({ name }) => (name === 'favorite' ? 'transparent' : 'var(--color-black)')};
	stroke: var(--color-black);

	&:hover,
	&:focus {
		transform: scale(1.1);
		stroke: var(--color-dark-gray);
	}
`;
