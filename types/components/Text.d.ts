import React from 'react';
import { StyleSheet, TextStyle, TextProps } from 'react-native';
declare type Text = React.StatelessComponent<Text.Props> & {
    presets: StyleSheet.NamedStyles<{
        h1: TextStyle;
        h2: TextStyle;
        h3: TextStyle;
        h4: TextStyle;
        h5: TextStyle;
        h6: TextStyle;
        p: TextStyle;
    }>;
};
declare const Text: Text;
declare namespace Text {
    interface Props extends TextProps {
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h5?: boolean;
        h6?: boolean;
        italic?: boolean;
        bold?: boolean;
        family?: string;
        line?: 'none' | 'underline' | 'line-through' | 'underline line-through';
        variant?: 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums' | ('small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums')[];
        vertical?: 'auto' | 'top' | 'bottom' | 'center';
        align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
        spacing?: number;
        decoration?: 'solid' | 'double' | 'dotted' | 'dashed';
        transform?: 'uppercase' | 'lowercase' | 'capitalize';
        direction?: 'auto' | 'ltr' | 'rtl';
    }
}
export default Text;
