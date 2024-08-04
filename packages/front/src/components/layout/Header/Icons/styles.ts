import { flexCenter } from 'src/styles/mixins';
import styled from 'styled-components';

export const List = styled.ul`
	${flexCenter};
	gap: 24px;
`;

export const ListItem = styled.li`
	${flexCenter};
	height: 24px;
	width: 24px;
`;
