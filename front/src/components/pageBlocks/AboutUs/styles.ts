import { flexCenter } from 'src/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	${flexCenter};
	gap: 126px;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: start;
`;

export const ListItem = styled.li`
	color: ${({ theme }) => theme.colors.primary[400]};
`;

