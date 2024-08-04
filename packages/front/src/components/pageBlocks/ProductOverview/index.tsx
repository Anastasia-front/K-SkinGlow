import { FC, ReactNode } from 'react';
import { StyleSection, Title } from './styles';

interface ProductOverviewProps {
	title: string;
	children: ReactNode;
}

export const ProductOverview: FC<ProductOverviewProps> = ({ title, children }) => (
	<StyleSection>
		<Title>{title}</Title>
		{children}
	</StyleSection>
);
