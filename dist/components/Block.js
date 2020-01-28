import React from 'react';
import { View } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
class Block extends React.Component {
    constructor() {
        super(...arguments);
        this.parser = () => {
            const { children, on, ...rest } = this.props;
            const { style, props } = Style.parser(rest);
            if (on)
                Object.assign(props, Event.parsers.view(on).events);
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
