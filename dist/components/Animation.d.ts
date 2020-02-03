import React, { ComponentType } from 'react';
import Style from '../utils/Style';
declare type RequestComponentType = ComponentType<{
    [key: string]: any;
}>;
interface Props extends Omit<Style.Animation.Props, 'style'> {
    component: RequestComponentType;
    style?: Style.Animation.Style;
    [key: string]: any;
}
declare const Animation: React.StatelessComponent<Props>;
declare namespace Animation { }
export default Animation;
