import { Component, PureComponent } from 'react';
import { Animated, ViewStyle } from 'react-native';
declare type P<C> = C extends new (...args: any) => Component<infer P> ? P : C extends new (...args: any) => PureComponent<infer P> ? P : never;
declare type Props<C> = {
    component: any;
    style?: {
        [K in keyof ViewStyle]: ViewStyle[K] | InstanceType<typeof Animated.Value>;
    };
} & (P<C> extends never ? {
    [key: string]: any;
} : P<C>);
declare class Animation<C> extends Component<Props<C>> {
    private Component;
    constructor(props: Props<C>);
    render: () => JSX.Element;
}
declare namespace Animation { }
export default Animation;
