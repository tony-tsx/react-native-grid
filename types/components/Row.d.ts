import React from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare class Row extends React.Component<Row.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Row {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
        onPress?: TouchableOpacityProps['onPress'];
        touchBefore?: boolean;
        size?: number;
    };
}
export default Row;
