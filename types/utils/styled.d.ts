import { ViewStyle } from 'react-native';
export interface StyledOptions {
    center?: boolean;
    align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    absolute?: boolean;
    relative?: boolean;
    radius?: number;
    bg?: string;
    shadow?: boolean | number;
    row?: boolean;
    reverse?: boolean;
}
declare const styled: {
    ({ center, align, justify, absolute, relative, radius, bg, shadow, row, reverse }: StyledOptions, initial?: ViewStyle | undefined): ViewStyle;
    removeProps<P extends StyledOptions>(props: P): Pick<P, Exclude<keyof P, "center" | "reverse" | "row" | "absolute" | "relative" | "justify" | "align" | "radius" | "bg" | "shadow">>;
};
export default styled;
