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
}
declare const styled: {
    ({ center, align, justify, absolute, relative, radius, bg, shadow }: StyledOptions, initial?: ViewStyle | undefined): ViewStyle;
    removeProps<P extends StyledOptions>(props: P): Pick<P, Exclude<keyof P, "center" | "absolute" | "relative" | "justify" | "align" | "radius" | "bg" | "shadow">>;
};
export default styled;
