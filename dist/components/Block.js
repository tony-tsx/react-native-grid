import React from 'react';
import { View } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
const Block = ({ children, on, ...rest }) => {
    const { style, props } = Style.parser(rest);
    if (on)
        Object.assign(props, Event.parsers.view(on).events);
    return <View {...props} style={style}>{children}</View>;
};
export default Block;
