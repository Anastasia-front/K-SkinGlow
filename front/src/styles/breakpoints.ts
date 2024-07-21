const size = {
	mobile: '360px',
	tablet: '768px',
	laptop: '1200px',
	pc: '1440px',
};

export const device = {
	mobile: `(min-width: ${size.mobile})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	pc: `(min-width: ${size.pc})`,
};

// приклад використання

// import styled from 'styled-components';
// import { device } from './device';

// const Page = styled.div`
//   margin: auto;
//   font-family: "sans-serif";
//   text-align: center;

//   @media ${device.laptop} {
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;
