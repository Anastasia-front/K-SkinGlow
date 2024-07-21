import { flexColumnCenter, hiddenHeadingStyles } from 'src/styles/mixins';
import styled from 'styled-components';
import { SectionProps } from './types';

export const StyleSection = styled.section`
	${flexColumnCenter};
	row-gap: 80px;
`;

export const Heading = styled.div<Partial<SectionProps>>`
	${flexColumnCenter};
	gap: 24px;
	${({ hiddenHeading }) => (hiddenHeading ? hiddenHeadingStyles : '')};
`;

export const Title = styled.h2`
	font-size: 32px;
	font-weight: 500;
	line-height: 1.2;
	text-transform: uppercase;
`;

export const Description = styled.h3`
	font-size: 24px;
	font-weight: 500;
`;
