import React from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Style from '../utils/Style';
const Touch = props => {
    const { highlight, opacity, children, ...rest } = props;
    const { style, props: prop } = Style.parser(props);
    switch (true) {
        case highlight: return <TouchableHighlight {...prop} style={style}>{children}</TouchableHighlight>;
        case opacity: return <TouchableOpacity {...prop} style={style}>{children}</TouchableOpacity>;
        default: return <TouchableWithoutFeedback {...prop} style={style}>{children}</TouchableWithoutFeedback>;
    }
};
export default Touch;
