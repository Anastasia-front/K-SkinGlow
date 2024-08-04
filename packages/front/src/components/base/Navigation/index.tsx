import { headerNavigationLinks } from 'src/constants';

import { FC } from 'react';
import { NavList, StyledLink } from './styles';
import { NavigationProps } from './types';

export const Navigation: FC<NavigationProps> = ({ $color, $direction, $location }) => (
	<nav>
		<NavList $direction={$direction}>
			{headerNavigationLinks.map(({ link, text }, index) => (
				<li key={index}>
					<StyledLink to={link} $color={$color} $location={$location}>
						{text}
					</StyledLink>
				</li>
			))}
		</NavList>
	</nav>
);
