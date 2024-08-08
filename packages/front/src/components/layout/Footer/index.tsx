import { Icon, Logo, Navigation, Wrapper } from 'src/components';
import { Label } from 'src/components/base/Label';
import { contacts, WEBSITE_NAME } from 'src/constants';

import { Contact, FooterContainer, List, ListItem } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyRightTag = <span>&#169;</span>;
  const copyRightSymbol = copyRightTag.props.children;
  return (
    <FooterContainer id="contact">
      <Wrapper>
        <Wrapper $direction="row" $justifyContent="space-between" $alignItems="flex-start">
          <Logo $location="footer" />
          <Navigation $color="var(--color-white)" $direction="column" $location="footer" />
          <List>
            {contacts.map(({ id, title, href, name, contact }) => (
              <ListItem key={id}>
                <Label variant="secondary" title={title} color="white" />
                <Contact>
                  <Icon name={name} />
                  <a href={href}>{contact}</a>
                </Contact>
              </ListItem>
            ))}
          </List>
        </Wrapper>

        <Label title={`${copyRightSymbol} ${currentYear} ${WEBSITE_NAME}`} color={100} />
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
