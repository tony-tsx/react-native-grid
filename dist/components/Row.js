import React from 'react';
import { View } from 'react-native';
import Style from '../utils/Style';
import { number } from 'prop-types';
import Event from '../utils/Event';
class Row extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, size, on, ...rest } = this.props;
            const { style, props } = Style.parser(rest);
            if (on)
                Object.assign(props, Event.parsers.view(on).events);
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
