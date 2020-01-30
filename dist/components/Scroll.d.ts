import React from 'react';
import { ScrollViewProps, ViewStyle } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
interface Props extends Style.Props, Event.On<Event.Scroll> {
    indicator?: boolean | ScrollViewProps['indicatorStyle'];
    horizontal?: boolean;
    style?: ViewStyle;
}
declare const Scroll: React.StatelessComponent<Props>;
declare namespace Scroll { }
export default Scroll;
