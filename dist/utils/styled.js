const styled = ({ center, align, justify }, initial) => {
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
    return style;
};
export default styled;
