import React from 'react';
import { Animated } from 'react-native';
import Style from '../utils/Style';
const animation = Symbol('animation-component');
const register = (component) => component[animation] = Animated.createAnimatedComponent(component);
const retriver = (component) => component[animation] || null;
const check = (component) => !!component[animation];
const norm = (component) => {
    if (!check(component))
        return register(component);
    return retriver(component);
};
const Animation = ({ component, ...rest }) => {
    const Component = norm(component);
    const { style, props } = Style.parser(rest);
    return <Component {...props} style={style}/>;
};
export default Animation;
