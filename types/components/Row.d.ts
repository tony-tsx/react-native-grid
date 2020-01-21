import React from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare const Row: React.StatelessComponent<Row.Props>;
declare namespace Row {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    };
}
export default Row;
