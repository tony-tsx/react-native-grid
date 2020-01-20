import { StatelessComponent } from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
declare const Row: StatelessComponent<Row.Props>;
declare namespace Row {
    interface Props extends ViewProps {
        onPress?: TouchableOpacityProps['onPress'];
        size?: number;
    }
}
export default Row;
