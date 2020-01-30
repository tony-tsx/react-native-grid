import React from 'react';
import { TouchableWithoutFeedbackProps, TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
import Style from '../utils/Style';
declare const Touch: React.StatelessComponent<Touch.Props>;
declare namespace Touch {
    interface Highlight {
        highlight?: true;
        opacity?: false;
    }
    interface Opacity {
        opacity?: true;
        highlight?: false;
    }
    interface Non {
        highlight?: false;
        opacity?: false;
    }
    type Props = ((Highlight & TouchableHighlightProps) | (Opacity & TouchableOpacityProps) | (Non & TouchableWithoutFeedbackProps)) & Style.Props;
}
export declare type TouchProps = Touch.Props;
export default Touch;
