import React from 'react';
import { ScrollView } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
const Scroll = ({ children, indicator, style, horizontal, on, ...rest }) => {
    const containerStyle = Style.parser(rest).style;
    const events = on ? Event.parsers.scroll(on).events : {};
    return <ScrollView style={style} horizontal={horizontal} contentContainerStyle={containerStyle} showsHorizontalScrollIndicator={!!indicator} showsVerticalScrollIndicator={!!indicator} indicatorStyle={typeof indicator === 'string' ? indicator : undefined} {...events}>{children}</ScrollView>;
};
Scroll.defaultProps = { indicator: false };
export default Scroll;
