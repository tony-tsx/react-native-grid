import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
declare class Row extends React.Component<Row.Props> {
    static propTypes: WeakValidationMap<Omit<Row.Props, keyof ViewProps | keyof Style.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Row {
    type Props = ViewProps & Style.Props & Event.On<Event.View> & {
        size?: number;
    };
}
export default Row;
