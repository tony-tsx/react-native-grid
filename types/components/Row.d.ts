import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Styled from '../utils/Styled';
declare class Row extends React.Component<Row.Props> {
    static propTypes: WeakValidationMap<Omit<Row.Props, keyof ViewProps | keyof Styled.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Row {
    type Props = ViewProps & Styled.Props & {
        size?: number;
    };
}
export default Row;
