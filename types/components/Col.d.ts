import React from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
declare const Col: React.StatelessComponent<Col.Props>;
declare namespace Col {
    interface Props extends ViewProps, StyledOptions {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    }
}
export default Col;
