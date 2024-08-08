import { flexCenter, hiddenHeadingStyles } from 'src/styles/mixins';
import styled from 'styled-components';

export const List = styled.ul`
  ${flexCenter};
  gap: 24px;
`;

export const ListItem = styled.li`
  ${flexCenter};
  height: 24px;
  width: 24px;
`;

export const ModalHeading = styled.h2`
  ${hiddenHeadingStyles}
`;

export const Input = styled.input`
  height: 80px;
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  color: ${({ theme }) => theme.colors.primary[500]};
  display: flex;
  flex-direction: row;
  gap: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`;
