import { FC } from 'react';
import { Description, Heading, StyleSection, Title } from './styles';
import { SectionProps } from './types';

export const Section: FC<SectionProps> = ({ id, title, description, hiddenHeading, children }) => (
	<StyleSection id={id}>
		<Heading hiddenHeading={hiddenHeading}>
			<Title>{title}</Title>
			{description && <Description>{description}</Description>}
		</Heading>
		{children}
	</StyleSection>
);
