import { ViewStyle } from 'react-native';
export interface StyledOptions {
    center?: boolean;
    align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
}
declare const styled: ({ center, align, justify }: StyledOptions, initial?: ViewStyle | undefined) => ViewStyle;
export default styled;
