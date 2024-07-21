import { FC, ReactNode } from 'react';
import { StyleSection, Title } from './styles';

interface ProductCartProps {
	title: string;
	children: ReactNode;
}

export const ProductCart: FC<ProductCartProps> = ({ title, children }) => (
	<StyleSection>
		<Title>{title}</Title>
		{children}
	</StyleSection>
);
