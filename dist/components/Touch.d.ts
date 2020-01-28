import React from 'react';
import { TouchableWithoutFeedbackProps, TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
declare const Touch: React.StatelessComponent<Touch.Props>;
declare namespace Touch {
    interface Highlight {
        highlight?: true;
        opacity?: boolean;
        non?: boolean;
    }
    interface Opacity {
        opacity?: true;
        non?: boolean;
        highlight?: boolean;
    }
    interface Non {
        non?: true;
        highlight?: boolean;
        opacity?: boolean;
    }
    type Props = (Highlight & TouchableHighlightProps) | (Opacity & TouchableOpacityProps) | (Non & TouchableWithoutFeedbackProps);
}
export declare type TouchProps = Touch.Props;
export default Touch;
