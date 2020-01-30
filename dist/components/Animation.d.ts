import React, { ComponentType } from 'react';
import { Animated, ViewStyle } from 'react-native';
interface Props {
    component: ComponentType;
    style?: {
        [K in keyof ViewStyle]: ViewStyle[K] | InstanceType<typeof Animated.Value>;
    };
    [key: string]: any;
}
declare const Animation: React.StatelessComponent<Props>;
declare namespace Animation { }
export default Animation;
