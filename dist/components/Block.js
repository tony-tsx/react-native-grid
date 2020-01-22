import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from '../utils/styled';
import Touch from './Touch';
class Block extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { onPress, children, style, touchBefore, ...rest } = this.props;
            const { highlight, opacity, non, ...more } = rest;
            const flatten = StyleSheet.flatten(style);
            const rootStyle = styled(more, flatten);
            const rootProps = styled.removeProps(more);
            return {
                style: rootStyle,
                props: rootProps,
                before: touchBefore,
                touch: { onPress, highlight, opacity, non, simple: true },
                children
            };
        };
        this.render = () => {
            const { before, props, style, touch, children } = this.parser();
            if (before)
                return <Touch {...touch}>
      <View {...props} style={style}>{children}</View>
    </Touch>;
            return <View {...props} style={style}>
      <Touch {...touch}>{children}</Touch>
    </View>;
        };
    }
}
export default Block;
