import React from 'react';
import { Animated } from 'react-native';
const storage = {};
const register = (component) => {
    component.__animation__ = Symbol(`${component.name}--animation--`);
    storage[component.__animation__] = Animated.createAnimatedComponent(component);
};
const retriver = (component) => storage[component.__animation__] || null;
const check = (component) => '__animation__' in component && typeof component.__animation__ === 'symbol';
const norm = (component) => {
    if (!check(component))
        register(component);
    return retriver(component);
};
const Animation = ({ component, children, style, ...rest }) => {
    const Component = norm(component);
    return <Component {...rest}>{children}</Component>;
};
export default Animation;
