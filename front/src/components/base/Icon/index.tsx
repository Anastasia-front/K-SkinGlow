import { FC } from 'react';

import { icons } from 'src/assets';

import { StyledIcon } from './styles';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ width = 24, height = 24, name = 'default' }) => (
	<StyledIcon width={width} height={height} name={name}>
		<use href={icons.sprite + `#${name}`} />
	</StyledIcon>
);
