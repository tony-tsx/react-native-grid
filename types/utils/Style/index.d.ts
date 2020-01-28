import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
declare namespace Style {
    export const parser: <P extends Props>({ align, center, justify, absolute, relative, radius, bg, shadow, row, reverse, flex, percent, h, m, p, w, overflow, index, full, style: propStyle, ...props }: P) => {
        style: Styles.Merge;
        props: Pick<P, Exclude<keyof P, "center" | "reverse" | "style" | "flex" | "row" | "absolute" | "relative" | "justify" | "p" | "align" | "radius" | "bg" | "shadow" | "percent" | "h" | "m" | "w" | "overflow" | "index" | "full">>;
    };
    export namespace Styles {
        type Merge = ViewStyle & TextStyle & ImageStyle;
        type Change = ViewStyle | TextStyle | ImageStyle;
    }
    export interface Centralization {
        center?: boolean;
        align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
        justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    }
    export interface Positions {
        absolute?: boolean | Space;
        relative?: boolean | Space;
    }
    /**
     * The resolution value has 3 forms:
     *
     * 1st boolean is the entire resolution;
     * 2nd number is the value of the resolution itself;
     * 3rd ((string | number)?) [3] is the resolution value, the minimum value and the maximum value respectively;
     */
    export type Resolution = boolean | number | [(number)?, (number)?, (number)?];
    /**
     * The space value has 4 forms
     *
     * 1st number is the value of the resolution itself
     * 2nd number [2] is the vertical and horizontal value respectively
     * 3rd number [3] is the value of the space in relation to the
     * top, right, bottom and left and the same value of the right is attributed to the left.
     * 4th number [3] is the space value in relation to the top, right, bottom and left respectively
     */
    export type Space = number | [(number)?, (number)?] | [(number)?, (number)?, (number)?] | [(number)?, (number)?, (number)?, (number)?];
    interface Resolutions {
        /**
         * Height resolution value
         */
        h?: Resolution;
        /**
         * Width resolution value
         */
        w?: Resolution;
    }
    export interface Spaces {
        /**
         * Margin spacing value
         */
        m?: Space;
        /**
         * Fill spacing value
         */
        p?: Space;
    }
    export interface Props extends Centralization, Positions, Resolutions, Spaces {
        style?: Styles.Merge | Styles.Change;
        radius?: number | Space;
        shadow?: boolean | number;
        row?: boolean;
        reverse?: boolean;
        bg?: string;
        flex?: boolean | number;
        percent?: boolean;
        overflow?: boolean | 'visible' | 'hidden' | 'scroll';
        index?: number;
        full?: boolean;
    }
    export {};
}
export default Style;
