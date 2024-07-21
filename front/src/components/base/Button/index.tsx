import { FC } from 'react';
import { StyledButton } from './styles';
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = ({ label, onClick, $color, $backgroundColor }) => (
	<StyledButton onClick={onClick} $backgroundColor={$backgroundColor} $color={$color} type="button">
		{label}
	</StyledButton>
);
