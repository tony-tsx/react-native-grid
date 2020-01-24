import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Styled from '../utils/Styled';
declare class Circle extends React.Component<Circle.Props> {
    static propTypes: WeakValidationMap<Omit<Circle.Props, keyof ViewProps | keyof Styled.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Circle {
    type Props = ViewProps & Styled.Props & {
        size: number;
    };
}
export default Circle;
