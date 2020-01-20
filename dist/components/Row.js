import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import styled from '../utils/styled';
const Row = props => {
    const { onPress, style, children, align, center, justify, ...rest } = props;
    const flatten = StyleSheet.flatten(style);
    const rootStyle = {
        flexDirection: 'row',
        flex: props.size ?? (flatten && flatten.height) ? 0 : 1,
        ...styled({ align, center, justify }, flatten)
    };
    const col = <View style={[flatten, rootStyle]} {...rest}>{children}</View>;
    if (onPress)
        return <TouchableOpacity style={[flatten, rootStyle]} onPress={onPress}>{col}</TouchableOpacity>;
    return col;
};
export default Row;
