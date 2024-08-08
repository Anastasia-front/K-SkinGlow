import { PrimaryColorsType } from 'src/styles/types';

export interface LabelProps {
  title: string;
  variant?: LabelVariantType;
  color?: 'black' | 'white' | PrimaryColorsType;
}

export type LabelVariantType = 'primary' | 'secondary' | 'contact';
