import Style from '.';
declare const parser: <P extends Style.Props>({ align, center, justify, absolute, relative, radius, bg, shadow, row, reverse, flex, percent, h, m, p, w, overflow, index, style: propStyle, ...props }: P) => {
    style: Style.Styles.Merge;
    props: Pick<P, Exclude<keyof P, "center" | "reverse" | "style" | "flex" | "row" | "absolute" | "relative" | "justify" | "p" | "align" | "radius" | "bg" | "shadow" | "percent" | "h" | "m" | "w" | "overflow" | "index">>;
};
export default parser;