
import { AlignType, FlexDirectionType, JustifyType } from 'src/types';

export interface LayoutProps {}

export interface WrapperProps {
  $direction?: FlexDirectionType;
  $justifyContent?: JustifyType;
  $alignItems?:AlignType
}
