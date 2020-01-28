import React, { Component } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import Style from '../utils/Style';
import Event from '../utils/Event';
// @ts-ignore
LinearGradient.defaultProps = { ...(LinearGradient.defaultProps, {}),
    useAngle: true
};
class Gradient extends Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            const { linear, radial, children, on, ...rest } = this.props;
            const { style, props } = Style.parser(rest);
            if (on)
                Object.assign(props, Event.parsers.view(on).events);
            if (radial)
                throw new Error('Radial Dont Supported');
            return (<LinearGradient {...props} style={style}>{children}</LinearGradient>);
        };
    }
}
export default Gradient;
