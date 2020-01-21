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
    type Simple = {
        simple: boolean;
    } & ((Highlight & Pick<TouchableHighlightProps, 'onPress'>) | (Opacity & Pick<TouchableOpacityProps, 'onPress'>) | (Non & Pick<TouchableWithoutFeedbackProps, 'onPress'>));
    type Props = (Highlight & TouchableHighlightProps) | (Opacity & TouchableOpacityProps) | (Non & TouchableWithoutFeedbackProps) | Simple;
}
export declare type TouchProps = Touch.Props;
export default Touch;
