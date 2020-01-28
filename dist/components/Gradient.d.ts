import { Component } from 'react';
import { LinearGradientProps } from 'react-native-linear-gradient';
import Style from '../utils/Style';
import Event from '../utils/Event';
declare class Gradient extends Component<Gradient.Props> {
    render: () => JSX.Element;
}
declare namespace Gradient {
    type Linear = LinearGradientProps & Style.Props & Event.On<Event.View> & {
        linear: true;
        radial?: undefined | false;
    };
    type Radial = Style.Props & Event.On<Event.View> & {
        radial: true;
        linear?: undefined | false;
    };
    export type Props = Linear | Radial;
    export {};
}
export default Gradient;
