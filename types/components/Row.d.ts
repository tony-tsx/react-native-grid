import React from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
declare const Row: React.StatelessComponent<Row.Props>;
declare namespace Row {
    interface Props extends ViewProps, StyledOptions {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    }
}
export default Row;
