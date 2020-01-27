import Event from '.'
import { AccessibilityProps } from 'react-native'

const accessibility = <P extends Event.Accessibility>( {
  accessibilityAction,
  accessibilityTap,
  magicTap,
  ...props
}: P ) => {
  const events: AccessibilityProps = {}
  if ( accessibilityAction ) events.onAccessibilityAction = accessibilityAction
  if ( accessibilityTap ) events.onAccessibilityTap = accessibilityTap
  if ( magicTap ) events.onMagicTap = magicTap
  return { events, props }
}

export default accessibility
