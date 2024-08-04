import { styled } from 'styled-components';

import { device, flexColumnCenter } from 'src/styles';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	${flexColumnCenter};
	row-gap: 80px;

	@media ${device.mobile} {
		padding: 0 10px;
	}

	@media ${device.tablet} {
		padding: 0 30px;
	}
	@media ${device.laptop} {
		padding: 0 60px;
	}

	@media ${device.pc} {
		padding: 0 80px;
		max-width: 1440px;
	}
`;
