import { Logo, Navigation } from 'src/components';

import { Icons } from './Icons';
import { HeaderContainer } from './styles';

const Header = () => (
	<HeaderContainer>
		<Navigation $color="var(--color-black)" $direction="row" $location="header" />
		<Logo $location="header" />
		<Icons />
	</HeaderContainer>
);

export default Header;
