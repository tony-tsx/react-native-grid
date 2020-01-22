import React, { Component } from 'react';
import { Animated } from 'react-native';
const storage = {};
class Animation extends Component {
    constructor(props) {
        super(props);
        this.render = () => {
            const { children, component, ...rest } = this.props;
            return <this.Component {...rest}>{children}</this.Component>;
        };
        if (!props.component)
            throw new Error('component as required');
        if (!('__animation__' in props.component && typeof props.component.__animation__ === 'symbol')) {
            props.component.__animation__ = Symbol(`${props.component.name}__animation__`);
            storage[props.component.__animation__] = Animated.createAnimatedComponent(props.component);
        }
        this.Component = storage[props.component.__animation__];
    }
}
export default Animation;
