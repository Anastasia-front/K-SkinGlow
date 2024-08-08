import { flexColumnCenter } from 'src/styles';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[300]};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  ${flexColumnCenter}
`;
