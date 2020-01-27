import { ViewProps, GestureResponderHandlers, AccessibilityProps, Touchable as TouchableProps, ScrollViewProps } from 'react-native';
declare namespace Event {
    const parsers: {
        accessibility: <P extends Accessibility>({ accessibilityAction, accessibilityTap, magicTap, ...props }: P) => {
            events: AccessibilityProps;
            props: Pick<P, Exclude<keyof P, "magicTap" | "accessibilityAction" | "accessibilityTap">>;
        };
        gesture: <P_1 extends Gesture>({ moveShouldSetResponder, moveShouldSetResponderCapture, responderEnd, responderGrant, responderMove, responderReject, responderRelease, responderStart, responderTerminate, responderTerminationRequest, startShouldSetResponder, startShouldSetResponderCapture, ...props }: P_1) => {
            events: GestureResponderHandlers;
            props: Pick<P_1, Exclude<keyof P_1, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">>;
        };
        scroll: <P_2 extends Scroll>({ contentSizeChange, momentumScrollBegin, momentumScrollEnd, scroll, scrollAnimationEnd, scrollBeginDrag, scrollEndDrag, ...one }: P_2) => {
            events: ScrollViewProps & ViewProps & GestureResponderHandlers & AccessibilityProps & TouchableProps;
            props: Pick<Pick<Pick<Pick<Pick<P_2, Exclude<keyof P_2, "scroll" | "contentSizeChange" | "momentumScrollBegin" | "momentumScrollEnd" | "scrollAnimationEnd" | "scrollBeginDrag" | "scrollEndDrag">>, Exclude<Exclude<keyof P_2, "scroll" | "contentSizeChange" | "momentumScrollBegin" | "momentumScrollEnd" | "scrollAnimationEnd" | "scrollBeginDrag" | "scrollEndDrag">, "layout">>, Exclude<Exclude<Exclude<keyof P_2, "scroll" | "contentSizeChange" | "momentumScrollBegin" | "momentumScrollEnd" | "scrollAnimationEnd" | "scrollBeginDrag" | "scrollEndDrag">, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">>, Exclude<Exclude<Exclude<Exclude<keyof P_2, "scroll" | "contentSizeChange" | "momentumScrollBegin" | "momentumScrollEnd" | "scrollAnimationEnd" | "scrollBeginDrag" | "scrollEndDrag">, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">, "magicTap" | "accessibilityAction" | "accessibilityTap">>, Exclude<Exclude<Exclude<Exclude<Exclude<keyof P_2, "scroll" | "contentSizeChange" | "momentumScrollBegin" | "momentumScrollEnd" | "scrollAnimationEnd" | "scrollBeginDrag" | "scrollEndDrag">, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">, "magicTap" | "accessibilityAction" | "accessibilityTap">, "touchCancel" | "touchEnd" | "touchEndCapture" | "touchMove" | "touchStart">>;
        };
        view: <P_3 extends View>({ layout, ...one }: P_3) => {
            events: ViewProps & GestureResponderHandlers & AccessibilityProps & TouchableProps;
            props: Pick<Pick<Pick<Pick<P_3, Exclude<keyof P_3, "layout">>, Exclude<Exclude<keyof P_3, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">>, Exclude<Exclude<Exclude<keyof P_3, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">, "magicTap" | "accessibilityAction" | "accessibilityTap">>, Exclude<Exclude<Exclude<Exclude<keyof P_3, "layout">, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">, "magicTap" | "accessibilityAction" | "accessibilityTap">, "touchCancel" | "touchEnd" | "touchEndCapture" | "touchMove" | "touchStart">>;
        };
        touchable: <P_4 extends Touchable>({ touchCancel, touchEnd, touchEndCapture, touchMove, touchStart, ...props }: P_4) => {
            events: TouchableProps;
            props: Pick<P_4, Exclude<keyof P_4, "touchCancel" | "touchEnd" | "touchEndCapture" | "touchMove" | "touchStart">>;
        };
    };
    interface Gesture {
        moveShouldSetResponder?: GestureResponderHandlers['onMoveShouldSetResponder'];
        moveShouldSetResponderCapture?: GestureResponderHandlers['onMoveShouldSetResponderCapture'];
        responderEnd?: GestureResponderHandlers['onResponderEnd'];
        responderGrant?: GestureResponderHandlers['onResponderGrant'];
        responderMove?: GestureResponderHandlers['onResponderMove'];
        responderReject?: GestureResponderHandlers['onResponderReject'];
        responderRelease?: GestureResponderHandlers['onResponderRelease'];
        responderStart?: GestureResponderHandlers['onResponderStart'];
        responderTerminate?: GestureResponderHandlers['onResponderTerminate'];
        responderTerminationRequest?: GestureResponderHandlers['onResponderTerminationRequest'];
        startShouldSetResponder?: GestureResponderHandlers['onStartShouldSetResponder'];
        startShouldSetResponderCapture?: GestureResponderHandlers['onStartShouldSetResponderCapture'];
    }
    interface Accessibility {
        accessibilityAction?: AccessibilityProps['onAccessibilityAction'];
        accessibilityTap?: AccessibilityProps['onAccessibilityTap'];
        magicTap?: AccessibilityProps['onMagicTap'];
    }
    interface Touchable {
        touchCancel?: TouchableProps['onTouchCancel'];
        touchEnd?: TouchableProps['onTouchEnd'];
        touchEndCapture?: TouchableProps['onTouchEndCapture'];
        touchMove?: TouchableProps['onTouchMove'];
        touchStart?: TouchableProps['onTouchStart'];
    }
    interface View extends Touchable, Accessibility, Gesture {
        layout?: ViewProps['onLayout'];
    }
    interface Scroll extends View {
        contentSizeChange?: ScrollViewProps['onContentSizeChange'];
        scroll?: ScrollViewProps['onScroll'];
        scrollBeginDrag?: ScrollViewProps['onScrollBeginDrag'];
        scrollEndDrag?: ScrollViewProps['onScrollEndDrag'];
        momentumScrollBegin?: ScrollViewProps['onMomentumScrollBegin'];
        momentumScrollEnd?: ScrollViewProps['onMomentumScrollEnd'];
        scrollAnimationEnd?: ScrollViewProps['onScrollAnimationEnd'];
    }
    interface On<O extends Scroll | View | Touchable | Accessibility | Gesture> {
        on?: O;
    }
}
export default Event;
