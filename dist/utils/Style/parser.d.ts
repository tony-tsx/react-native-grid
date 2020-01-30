import Style from '.';
declare const parser: <P extends Style.Props>({ align, center, justify, absolute, relative, radius, bg, shadow, row, reverse, flex, percent, h, m, p, w, overflow, index, full, style: propStyle, col, circle, size, ...props }: P) => {
    style: Style.Styles.Merge;
    props: Pick<P, Exclude<keyof P, "center" | "reverse" | "size" | "style" | "flex" | "row" | "absolute" | "relative" | "justify" | "circle" | "col" | "p" | "overflow" | "align" | "radius" | "bg" | "shadow" | "percent" | "h" | "m" | "w" | "index" | "full">>;
};
export default parser;
