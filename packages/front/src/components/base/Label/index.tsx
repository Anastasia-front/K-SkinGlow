import { FC } from 'react';

import { StyledLabel } from './styles';
import { LabelProps } from './types';

export const Label: FC<LabelProps> = ({ title, variant='primary', color }) => (
  <StyledLabel variant={variant} color={color}>
    {title}
  </StyledLabel>
);
