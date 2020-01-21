import React from 'react';
import { ViewProps } from 'react-native';
import Touch from './Touch';
import { StyledOptions } from '../utils/styled';
declare class Circle extends React.Component<Circle.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Circle {
    type Props = ViewProps & Omit<Touch.Simple, 'simple'> & StyledOptions & {
        touchAfter?: boolean;
        size: number;
    };
}
export default Circle;
