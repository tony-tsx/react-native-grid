import React from 'react'
import { ScrollViewProps, ScrollView, ViewStyle } from 'react-native'
import Style from '../utils/Style'
import Event from '../utils/Event'

interface Props extends Style.Props, Event.On<Event.Scroll> {
  indicator?: boolean | ScrollViewProps['indicatorStyle']
  horizontal?: boolean
  style?: ViewStyle
}

const Scroll: React.StatelessComponent<Props> = ( {
  children,
  indicator,
  style,
  horizontal,
  on,
  ...rest
} ) => {
  const containerStyle = Style.parser( rest ).style
  const events = on ? Event.parsers.scroll( on ).events : {}

  return <ScrollView
    style={ style }
    horizontal={ horizontal }
    contentContainerStyle={containerStyle}
    showsHorizontalScrollIndicator={ !!indicator }
    showsVerticalScrollIndicator={ !!indicator }
    indicatorStyle={ typeof indicator === 'string' ? indicator : undefined }
    {...events}
  >{children}</ScrollView>
}

Scroll.defaultProps = { indicator: false }

namespace Scroll {}

export default Scroll
