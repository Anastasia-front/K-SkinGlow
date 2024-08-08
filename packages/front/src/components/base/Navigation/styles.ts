/* eslint-disable indent */
import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

import { NavigationProps } from './types';

export const NavList = styled.ul<Partial<NavigationProps>>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 24px;
  align-items: ${({ $direction }) => ($direction === 'row' ? 'center' : 'flex-start')};
  justify-content: center;
`;

export const StyledLink = styled(NavLink)<Partial<NavigationProps>>`
  position: relative;
  font-size: 20px;
  line-height: 1.5;
  padding: 3px;
  color: ${({ $color }) => $color};
  transition: var(--animation);

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    transition: var(--animation);
  }

  &:focus::before {
    width: 100%;
    background-color: var(--color-black);
  }

  &:hover::before {
    width: 100%;
    background-color: ${({ $location }) => ($location === 'header' ? 'var(--color-dark-gray)' : 'var(--color-white)')};
  }
`;
