import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
declare class Circle extends React.Component<Circle.Props> {
    static propTypes: WeakValidationMap<Omit<Circle.Props, keyof ViewProps | keyof Style.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Circle {
    type Props = ViewProps & Style.Props & Event.On<Event.View> & {
        size: number;
    };
}
export default Circle;
