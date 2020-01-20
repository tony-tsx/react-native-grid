import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import styled from '../utils/styled';
const Col = props => {
    const { onPress, style, children, align, center, justify, ...rest } = props;
    const flatten = StyleSheet.flatten(style);
    const rootStyle = {
        flexDirection: 'column',
        flex: props.size ? props.size : (flatten && flatten.width) ? 0 : 1,
        ...styled({ align, center, justify }, flatten),
    };
    const col = <View style={[flatten, rootStyle]} {...rest}>{children}</View>;
    if (onPress)
        return <TouchableOpacity style={[flatten, rootStyle]} onPress={onPress}>{col}</TouchableOpacity>;
    return col;
};
export default Col;
