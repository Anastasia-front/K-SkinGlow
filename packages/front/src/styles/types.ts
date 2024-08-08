import { theme } from './theme';

const { colors, fonts, fontSizes, animation, fontWeights } = theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [colorKey in GeneralColorsType]: {
        [key in keyof (typeof colors)[colorKey]]: string;
      };
    };
    fonts: {
      [fontFamilyKey in FontFamilyType]: string;
    };
  }
}
type GeneralColorsType = keyof typeof colors;
export type PrimaryColorsType = keyof typeof colors.primary;
export type ColorsType = {
  [colorKey in GeneralColorsType]: {
    [key in keyof (typeof colors)[colorKey]]: string;
  };
};
export type FontFamilyType = keyof typeof fonts;
export type FontType = keyof typeof fonts;
export type FontSizesType = keyof typeof fontSizes;
export type FontWeightsType = keyof typeof fontWeights;
export type AnimationType = keyof typeof animation;

export type Navigation$locationType = 'header' | 'footer';

export type AlignType = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type JustifyType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

export type FlexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type OverflowType =
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

export type PositionType = 'absolute' | 'relative' | 'fixed' | 'sticky';
