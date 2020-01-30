import React from 'react'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  TouchableHighlightProps,
  TouchableOpacityProps
} from 'react-native'
import Style from '../utils/Style'

const Touch: React.StatelessComponent<Touch.Props> = props => {
  const { highlight, opacity, children, ...rest } = props

  const { style, props: prop } = Style.parser( props )

  switch ( true ) {
    case highlight: return <TouchableHighlight { ...prop } style={ style }>{children}</TouchableHighlight>
    case opacity: return <TouchableOpacity { ...prop } style={ style }>{children}</TouchableOpacity>
    default: return <TouchableWithoutFeedback { ...prop } style={ style }>{children}</TouchableWithoutFeedback>
  }
}

namespace Touch {
  export interface Highlight { highlight?: true, opacity?: false }
  export interface Opacity { opacity?: true, highlight?: false }
  export interface Non { highlight?: false, opacity?: false }

  export type Props = (
    | ( Highlight & TouchableHighlightProps )
    | ( Opacity & TouchableOpacityProps )
    | ( Non & TouchableWithoutFeedbackProps )
  ) & Style.Props
}

export type TouchProps = Touch.Props

export default Touch
