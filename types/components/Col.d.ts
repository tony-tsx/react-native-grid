import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
declare class Col extends React.Component<Col.Props> {
    static propTypes: WeakValidationMap<Omit<Col.Props, keyof ViewProps | keyof Style.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Col {
    type Props = ViewProps & Style.Props & Event.On<Event.View> & {
        size?: number;
    };
}
export default Col;
