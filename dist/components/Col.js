import React from 'react';
import { View } from 'react-native';
import Styled from '../utils/Styled';
import { number } from 'prop-types';
class Col extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, size, ...rest } = this.props;
            const { style, props } = Styled.parser(rest);
            style.flexDirection = 'column',
                style.flex = size ? size : (style && style.width) ? 0 : 1;
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
Col.propTypes = {
    size: number
};
export default Col;
