import React from 'react'
import { ScrollViewProps, ScrollView, ViewStyle } from 'react-native'
import Style from '../utils/Style'
import Event from '../utils/Event'

interface Props extends Style.Props, Event.On<Event.Scroll> {
  indicator?: boolean | ScrollViewProps['indicatorStyle']
  horizontal?: boolean
  style?: ViewStyle
}

class Scroll extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    indicator: false
  }
  public render = () => {
    const { children, indicator, style, horizontal, on, ...rest } = this.props
    const { style: containerStyle } = Style.parser( rest )
    const scrollProps: ScrollViewProps = {}

    if ( on ) Object.assign( scrollProps, Event.parsers.scroll( on ) )

    scrollProps.style = style
    scrollProps.contentContainerStyle = containerStyle

    if ( indicator ) {

      if ( typeof indicator === 'string' ) scrollProps.indicatorStyle = indicator

    } else {

      scrollProps.showsHorizontalScrollIndicator = false
      scrollProps.showsVerticalScrollIndicator = false

    }

    if ( horizontal ) scrollProps.horizontal = true

    scrollProps.onAccessibilityAction

    return (
      <ScrollView contentContainerStyle={ style } { ...scrollProps }>
        { children }
      </ScrollView>
    )
  }
}

namespace Scroll {}

export default Scroll
