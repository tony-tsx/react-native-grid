const styled = ({ center, align, justify, absolute, relative, radius }, initial) => {
    const style = Object.assign({}, initial);
    if (align)
        switch (align) {
            case 'baseline':
            case 'stretch':
                style.alignItems = align;
                break;
            case 'start':
            case 'end':
                style.alignItems = `flex-${align}`;
            default: style.alignItems = 'center';
        }
    if (justify)
        switch (justify) {
            case 'end':
            case 'start':
                style.justifyContent = `flex-${justify}`;
                break;
            case 'around':
            case 'between':
            case 'evenly':
                style.justifyContent = `space-${justify}`;
                break;
            default:
                style.justifyContent = 'center';
                break;
        }
    if (center) {
        if (!style.alignItems)
            style.alignItems = 'center';
        if (!style.justifyContent)
            style.justifyContent = 'center';
    }
    if (relative)
        style.position = 'relative';
    else if (absolute)
        style.position = 'absolute';
    style.borderRadius = radius;
    return style;
};
styled.removeProps = (props) => {
    const { align, center, justify, absolute, relative, radius, ...rest } = props;
    return rest;
};
export default styled;
