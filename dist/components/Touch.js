import React from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
const Touch = props => {
    const { highlight, opacity, non, children, ...rest } = props;
    switch (true) {
        case highlight: return <TouchableHighlight {...rest}>{children}</TouchableHighlight>;
        case opacity: return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
        case non:
        default: return <TouchableWithoutFeedback {...rest}>{children}</TouchableWithoutFeedback>;
    }
};
export default Touch;
