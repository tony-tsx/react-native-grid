import { StyleSheet, Dimensions, Animated } from 'react-native';
const { width, height } = Dimensions.get('screen');
const parser = ({ 
// Centralização
align, justify, center, 
// Posicionamento
absolute, relative, 
// Borda
radius, 
// Backgorund
bg, 
// Sombra
shadow, 
// Direção e flex
flex, col, row, reverse, 
// Altura e largura
h, w, 
// espaçamento interno e externo
m, p, 
// Opcionais
percent, overflow, index, full, 
// Circulo
circle, size, style: propStyle, ...props }) => {
    const style = {};
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
    if (full)
        Object.assign(style, StyleSheet.absoluteFillObject);
    let positions = null;
    if (relative) {
        style.position = 'relative';
        if (typeof relative !== 'boolean')
            positions = relative;
    }
    else if (absolute) {
        style.position = 'absolute';
        if (typeof absolute !== 'boolean')
            positions = absolute;
    }
    if (positions || positions === 0)
        if (typeof positions === 'number') {
            style.top = positions;
            style.left = positions;
            style.bottom = positions;
            style.right = positions;
        }
        else if (Array.isArray(positions))
            if (positions.length === 2) {
                style.top = positions[0];
                style.left = positions[1];
                style.bottom = positions[0];
                style.right = positions[1];
            }
            else if (positions.length === 3) {
                style.top = positions[0];
                style.left = positions[1];
                style.bottom = positions[2];
                style.right = positions[1];
            }
            else {
                style.top = positions[0];
                style.left = positions[1];
                style.bottom = positions[2];
                style.right = positions[3];
            }
    if (radius || radius === 0)
        if (Array.isArray(radius))
            if (radius.length === 2) {
                style.borderTopLeftRadius = radius[0];
                style.borderTopRightRadius = radius[1];
                style.borderBottomRightRadius = radius[0];
                style.borderBottomLeftRadius = radius[1];
            }
            else if (radius.length === 3) {
                style.borderTopLeftRadius = radius[0];
                style.borderTopRightRadius = radius[1];
                style.borderBottomRightRadius = radius[2];
                style.borderBottomLeftRadius = radius[1];
            }
            else {
                style.borderTopLeftRadius = radius[0];
                style.borderTopRightRadius = radius[1];
                style.borderBottomRightRadius = radius[2];
                style.borderBottomLeftRadius = radius[3];
            }
        else
            style.borderRadius = radius;
    if (bg)
        style.backgroundColor = bg;
    if (shadow) {
        const num = typeof shadow === 'boolean' ? 5 : shadow;
        style.elevation = num;
        style.shadowColor = 'black';
        style.shadowOffset = { width: 0, height: num * .5 };
        style.shadowOpacity = 0.3;
        style.shadowRadius = .8 * num;
    }
    if (reverse)
        if (style.flexDirection)
            style.flexDirection = `${style.flexDirection}-reverse`;
        else
            style.flexDirection = 'column-reverse';
    if (flex)
        style.flex = typeof flex === 'number' ? flex : 1;
    if (row || row === 0) {
        style.flexDirection = 'row';
        if (typeof row === 'number')
            style.flex = row;
    }
    if (col || col === 0) {
        style.flexDirection = 'column';
        if (typeof col === 'number')
            style.flex = col;
    }
    if (h)
        if (Array.isArray(h)) {
            const [dheight, maxHeight, minHeight] = h;
            if (percent) {
                if (dheight)
                    if (typeof dheight === 'number')
                        style.height = height * dheight;
                    else
                        style.height = Animated.multiply(height, dheight);
                if (maxHeight)
                    if (typeof maxHeight === 'number')
                        style.height = height * maxHeight;
                    else
                        style.maxHeight = Animated.multiply(height, maxHeight);
                if (minHeight)
                    if (typeof minHeight === 'number')
                        style.height = height * minHeight;
                    else
                        style.minHeight = Animated.multiply(height, minHeight);
            }
            else {
                style.height = dheight;
                style.maxHeight = maxHeight;
                style.minHeight = minHeight;
            }
        }
        else if (typeof h === 'number')
            if (percent)
                style.height = height * h;
            else
                style.height = h;
        else
            style.height = height;
    if (w)
        if (Array.isArray(w)) {
            const [dwidth, maxWidth, minWidth] = w;
            if (percent) {
                if (dwidth)
                    if (typeof dwidth === 'number')
                        style.width = width * dwidth;
                    else
                        style.width = Animated.multiply(width, dwidth);
                if (maxWidth)
                    if (typeof maxWidth === 'number')
                        style.maxWidth = width * maxWidth;
                    else
                        style.maxWidth = Animated.multiply(width, maxWidth);
                if (minWidth)
                    if (typeof minWidth === 'number')
                        style.width = width * minWidth;
                    else
                        style.minWidth = Animated.multiply(width, minWidth);
            }
            else {
                style.width = dwidth ?? style.width;
                style.maxWidth = maxWidth ?? style.maxWidth;
                style.minWidth = minWidth ?? style.minWidth;
            }
        }
        else if (typeof w === 'number')
            if (percent)
                style.width = width * w;
            else
                style.width = w;
        else
            style.width = width;
    if (m || m === 0)
        if (Array.isArray(m))
            if (m.length <= 2) {
                style.marginVertical = m[0];
                style.marginHorizontal = m[1];
            }
            else if (m.length === 3) {
                style.marginTop = m[0];
                style.marginLeft = m[1];
                style.marginBottom = m[2];
                style.marginRight = m[1];
            }
            else {
                style.marginTop = m[0];
                style.marginLeft = m[1];
                style.marginBottom = m[2];
                style.marginRight = m[3];
            }
        else
            style.margin = m;
    if (p || p === 0)
        if (Array.isArray(p))
            if (p.length === 2) {
                style.paddingVertical = p[0];
                style.paddingHorizontal = p[1];
            }
            else if (p.length === 3) {
                style.paddingTop = p[0];
                style.paddingLeft = p[1];
                style.paddingBottom = p[2];
                style.paddingRight = p[1];
            }
            else {
                style.paddingTop = p[0];
                style.paddingLeft = p[1];
                style.paddingBottom = p[2];
                style.paddingRight = p[3];
            }
        else
            style.padding = p;
    if (overflow)
        style.overflow = typeof overflow === 'string' ? overflow : 'hidden';
    if (index)
        style.zIndex = index;
    if (circle) {
        if (size)
            if (percent)
                if (typeof size === 'number')
                    style.width = style.height = width * size;
                else
                    style.width = style.height = Animated.multiply(width, size);
            else
                style.width = style.height = size;
        if (typeof style.width === 'number')
            style.borderRadius = style.width / 2;
        else if (propStyle?.width && typeof propStyle.width === 'number')
            style.borderRadius = propStyle.width / 2;
        else
            style.borderRadius = width;
    }
    return { style: StyleSheet.flatten([style, propStyle]), props };
};
export default parser;
