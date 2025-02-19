import { ReactNode } from 'react';

export interface SectionProps {
	id?: string;
	title: string;
	hiddenHeading?: boolean;
	description?: string;
	children: ReactNode;
}
