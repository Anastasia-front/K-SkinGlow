import { css } from 'styled-components';
import { device } from './breakpoints';

export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexRowCenter = css`
	flex-direction: row;
	${flexCenter};
`;

export const flexColumnCenter = css`
	flex-direction: column;
	${flexCenter};
`;

export const hiddenHeadingStyles = css`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	border: 0;
	clip: rect(0 0 0 0);
`;

export const wrapper = css`
	width: 100%;
	margin: 0 auto;

	@media ${device.mobile} {
		padding-inline: 10px;
	}

	@media ${device.tablet} {
		padding-inline: 30px;
	}
	@media ${device.laptop} {
		padding-inline: 60px;
	}

	@media ${device.pc} {
		padding-inline: 80px;
		max-width: 1440px;
	}
`;
