import Styled from '.';
declare const parser: <P extends Styled.Props>({ align, center, justify, absolute, relative, radius, bg, shadow, row, reverse, flex, percent, h, m, p, w, style: propStyle, ...props }: P) => {
    style: Styled.Styles.Merge;
    props: Pick<P, Exclude<keyof P, "center" | "reverse" | "style" | "flex" | "row" | "absolute" | "relative" | "justify" | "p" | "align" | "radius" | "bg" | "shadow" | "percent" | "h" | "m" | "w">>;
};
export default parser;
