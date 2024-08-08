import styled from 'styled-components';

import { LabelProps } from './types';

export const StyledLabel = styled.p<Partial<LabelProps>>`
  font-size: ${({ variant = 'primary', theme }) => (variant === 'primary' ? theme.fontSizes.sm : theme.fontSizes.md)};
  color: ${({ color = 'black', theme }) =>
    color === 'white'
      ? theme.colors.primary[0]
      : color !== 'black'
        ? theme.colors.primary[color]
        : theme.colors.primary[500]};
`;
