import React from 'react';
import { View } from 'react-native';
import Styled from '../utils/Styled';
class Block extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, ...rest } = this.props;
            const { style, props } = Styled.parser(rest);
            return {
                style,
                props,
                children
            };
        };
        this.render = () => {
            const { props, style, children } = this.parser();
            return <View {...props} style={style}>{children}</View>;
        };
    }
}
export default Block;
