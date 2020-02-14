import Style from '.';
export interface Return<P extends Style.Props | Style.Animation.Props> {
    style: P extends Style.Props ? Style.Styles.Merge : Style.Animation.Style;
    props: Omit<P, keyof Style.Props>;
}
declare const parser: <P extends Style.Props | Style.Animation.Props>({ align, justify, center, absolute, relative, radius, bg, shadow, flex, col, row, reverse, h, w, m, p, percent, overflow, index, full, circle, size, border, style: propStyle, ...props }: P) => Return<P>;
export default parser;
