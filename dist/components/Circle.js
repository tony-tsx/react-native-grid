import React from 'react';
import { View, StyleSheet } from 'react-native';
import Touch from './Touch';
import styled from '../utils/styled';
class Circle extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { onPress, children, style, touchAfter, size, ...rest } = this.props;
            const { highlight, opacity, non, ...more } = rest;
            const flatten = StyleSheet.flatten(style);
            const rootStyle = styled(more, flatten);
            rootStyle.width = size,
                rootStyle.height = size,
                rootStyle.borderRadius = size / 2;
            const rootProps = styled.removeProps(more);
            return {
                style: rootStyle,
                props: rootProps,
                after: touchAfter,
                touch: { onPress, highlight, opacity, non, simple: true },
                children
            };
        };
        this.render = () => {
            const { after, props, style, touch, children } = this.parser();
            if (after)
                return <View {...props} style={style}>
      <Touch {...touch}>{children}</Touch>
    </View>;
            return <Touch {...touch}>
      <View {...props} style={style}>{children}</View>
    </Touch>;
        };
    }
}
export default Circle;
