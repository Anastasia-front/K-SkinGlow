import { Logo, Navigation, Wrapper } from 'src/components';

import { FooterContainer } from './styles';

const Footer = () => (
	<FooterContainer id="contact">
		<Wrapper>
			<Logo $location="footer" />
			<Navigation $color="var(--color-white)" $direction="column" $location="footer" />
		</Wrapper>
	</FooterContainer>
);

export default Footer;
