import React from 'react';
import { Text as NativeText } from 'react-native';
const Text = props => {
    const { h1, h2, h3, h4, h5, h6, children, style: propStyle, italic, bold, variant, vertical, align, decoration, direction, family, spacing, transform, ...rest } = props;
    const style = {};
    if (italic)
        style.fontStyle = 'italic';
    if (bold)
        style.fontWeight = 'bold';
    if (variant)
        style.fontVariant = Array.isArray(variant) ? variant : [variant];
    style.textAlignVertical = vertical;
    style.textAlign = align;
    style.textDecorationStyle = decoration;
    style.letterSpacing = spacing;
    style.textTransform = transform;
    if (family)
        style.fontFamily = family;
    if (h1)
        return <NativeText {...rest} style={[Text.presets.h1, style, propStyle]}>{children}</NativeText>;
    if (h2)
        return <NativeText {...rest} style={[Text.presets.h2, style, propStyle]}>{children}</NativeText>;
    if (h3)
        return <NativeText {...rest} style={[Text.presets.h3, style, propStyle]}>{children}</NativeText>;
    if (h4)
        return <NativeText {...rest} style={[Text.presets.h4, style, propStyle]}>{children}</NativeText>;
    if (h5)
        return <NativeText {...rest} style={[Text.presets.h5, style, propStyle]}>{children}</NativeText>;
    if (h6)
        return <NativeText {...rest} style={[Text.presets.h6, style, propStyle]}>{children}</NativeText>;
    return <NativeText {...rest} style={[style, Text.presets.p, propStyle]}>{children}</NativeText>;
};
Text.presets = {
    h1: { fontSize: 40 },
    h2: { fontSize: 34 },
    h3: { fontSize: 28 },
    h4: { fontSize: 22 },
    h5: { fontSize: 16, textDecorationLine: 'underline' },
    h6: { fontSize: 13 },
    p: { fontSize: 12 },
};
export default Text;
