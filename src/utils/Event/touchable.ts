import Event from '.'
import { Touchable as TouchableProps } from 'react-native'

const touchable = <P extends Event.Touchable>( {
  touchCancel,
  touchEnd,
  touchEndCapture,
  touchMove,
  touchStart,
  ...props
}: P ) => {
  const events: TouchableProps = {}
  if ( touchCancel ) events.onTouchCancel = touchCancel
  if ( touchEnd ) events.onTouchEnd = touchEnd
  if ( touchEndCapture ) events.onTouchEndCapture = touchEndCapture
  if ( touchMove ) events.onTouchMove = touchMove
  if ( touchStart ) events.onTouchStart = touchStart
  return { events, props }
}

export default touchable
