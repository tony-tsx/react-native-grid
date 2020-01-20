import { StatelessComponent } from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
declare const Col: StatelessComponent<Col.Props>;
declare namespace Col {
    interface Props extends ViewProps {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    }
}
export default Col;
