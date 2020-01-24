import React from 'react';
import { View } from 'react-native';
import Styled from '../utils/Styled';
import { number } from 'prop-types';
class Circle extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, size, ...rest } = this.props;
            const { style, props } = Styled.parser(rest);
            style.width = size,
                style.height = size,
                style.borderRadius = size / 2;
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
Circle.propTypes = {
    size: number.isRequired
};
export default Circle;
