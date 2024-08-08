import { wrapper } from 'src/styles';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  ${wrapper};
  background-color: var(--color-black);
  margin-top: 120px;
  padding-bottom: 40px;
  padding-top: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.primary[0]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: start;
`;
