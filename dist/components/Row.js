import React from 'react';
import { View } from 'react-native';
import Styled from '../utils/Styled';
import { number } from 'prop-types';
class Row extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, size, ...rest } = this.props;
            const { style, props } = Styled.parser(rest);
            style.flexDirection = 'row',
                style.flex = size ? size : (style && style.height) ? 0 : 1;
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
Row.propTypes = {
    size: number
};
export default Row;
