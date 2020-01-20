import React from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
declare const Col: React.StatelessComponent<Col.Props>;
declare namespace Col {
    interface Props extends ViewProps {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    }
}
export default Col;
