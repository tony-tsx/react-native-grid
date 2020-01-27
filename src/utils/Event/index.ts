import {
  ViewProps,
  GestureResponderHandlers,
  AccessibilityProps,
  Touchable as TouchableProps,
  ScrollViewProps
} from 'react-native'

import accessibility from './accessibility'
import gesture from './gesture'
import scroll from './scroll'
import view from './view'
import touchable from './touchable'

namespace Event {
  export const parsers = { accessibility, gesture, scroll, view, touchable }
  export interface Gesture {
    moveShouldSetResponder?: GestureResponderHandlers['onMoveShouldSetResponder']
    moveShouldSetResponderCapture?: GestureResponderHandlers['onMoveShouldSetResponderCapture']
    responderEnd?: GestureResponderHandlers['onResponderEnd']
    responderGrant?: GestureResponderHandlers['onResponderGrant']
    responderMove?: GestureResponderHandlers['onResponderMove']
    responderReject?: GestureResponderHandlers['onResponderReject']
    responderRelease?: GestureResponderHandlers['onResponderRelease']
    responderStart?: GestureResponderHandlers['onResponderStart']
    responderTerminate?: GestureResponderHandlers['onResponderTerminate']
    responderTerminationRequest?: GestureResponderHandlers['onResponderTerminationRequest']
    startShouldSetResponder?: GestureResponderHandlers['onStartShouldSetResponder']
    startShouldSetResponderCapture?: GestureResponderHandlers['onStartShouldSetResponderCapture']
  }
  export interface Accessibility {
    accessibilityAction?: AccessibilityProps['onAccessibilityAction']
    accessibilityTap?: AccessibilityProps['onAccessibilityTap']
    magicTap?: AccessibilityProps['onMagicTap']
  }
  export interface Touchable {
    touchCancel?: TouchableProps['onTouchCancel']
    touchEnd?: TouchableProps['onTouchEnd']
    touchEndCapture?: TouchableProps['onTouchEndCapture']
    touchMove?: TouchableProps['onTouchMove']
    touchStart?: TouchableProps['onTouchStart']
  }
  export interface View extends Touchable, Accessibility, Gesture {
    layout?: ViewProps['onLayout']
  }
  export interface Scroll extends View {
    contentSizeChange?: ScrollViewProps['onContentSizeChange']
    scroll?: ScrollViewProps['onScroll']
    scrollBeginDrag?: ScrollViewProps['onScrollBeginDrag']
    scrollEndDrag?: ScrollViewProps['onScrollEndDrag']
    momentumScrollBegin?: ScrollViewProps['onMomentumScrollBegin']
    momentumScrollEnd?: ScrollViewProps['onMomentumScrollEnd']
    scrollAnimationEnd?: ScrollViewProps['onScrollAnimationEnd']
  }
  export interface On<O extends Scroll | View | Touchable | Accessibility | Gesture> {
    on?: O
  }
}

export default Event
