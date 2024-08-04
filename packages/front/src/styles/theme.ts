import { colors } from './colors';

export const theme = {
	colors,
	fonts: {
		primary: "'Inter', sans-serif",
		secondary: "'Montagu Slab', serif",
	},
	animation: { primary: '0.5s ease-in-out', secondary: '0.2 ease' },
	fontSizes: {
		xs: '16px',
		sm: '20px',
		md: '24px',
		lg: '48px',
		xl: '66px',
		xxl: '160px',
	},
};

export type ThemeType = typeof theme;
