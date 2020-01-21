import React from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
const Touch = props => {
    const { highlight, opacity, non, children, ...rest } = props;
    if ('simple' in props && props.simple)
        switch (true) {
            case highlight: return <TouchableHighlight onPress={rest.onPress}>{children}</TouchableHighlight>;
            case opacity: return <TouchableOpacity onPress={rest.onPress}>{children}</TouchableOpacity>;
            case non:
            case 'onPress' in props: <TouchableWithoutFeedback onPress={rest.onPress}>{children}</TouchableWithoutFeedback>;
            default: return <React.Fragment>{props.children}</React.Fragment>;
        }
    switch (true) {
        case highlight: return <TouchableHighlight {...rest}>{children}</TouchableHighlight>;
        case opacity: return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
        case non:
        default: return <TouchableWithoutFeedback {...rest}>{children}</TouchableWithoutFeedback>;
    }
};
export default Touch;
