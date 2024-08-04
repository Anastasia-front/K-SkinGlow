import { FC } from 'react';
import { WEBSITE_NAME } from 'src/constants';

import { LogoContainer, StyledLink } from './styles';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({ $location }) => (
	<LogoContainer $location={$location}>
		<StyledLink to="/">{WEBSITE_NAME}</StyledLink>
	</LogoContainer>
);
