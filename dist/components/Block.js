import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from '../utils/styled';
import Touch from './Touch';
const Block = props => {
    const { onPress, children, style, ...rest } = props;
    const { highlight, opacity, non, ...more } = rest;
    const flatten = StyleSheet.flatten(style);
    const rootStyle = styled(more, flatten);
    const rootProps = styled.removeProps(more);
    // @ts-ignore
    return <Touch simple onPress={onPress} {...{ highlight, opacity, non }}>
    <View {...rootProps} style={rootStyle}>{children}</View>
  </Touch>;
};
export default Block;
