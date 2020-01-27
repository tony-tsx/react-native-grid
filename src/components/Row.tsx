import React, { WeakValidationMap } from 'react'
import { View, ViewProps } from 'react-native'
import Style from '../utils/Style'
import { number } from 'prop-types'
import Event from '../utils/Event'

class Row extends React.Component<Row.Props> {
  public static propTypes: WeakValidationMap<Omit<Row.Props, keyof ViewProps | keyof Style.Props>> = {
    size: number
  }
  private parser = () => {
    const { children, size, on, ...rest } = this.props

    const { style, props } = Style.parser( rest )

    if ( on ) Object.assign( props, Event.parsers.view( on ).events )

    style.flexDirection = 'row',
    style.flex = size ? size : ( style && style.height ) ? 0 : 1

    return {
      style,
      props,
      children
    }
  }
  public render = () => {
    const { props, style, children } = this.parser()

    return <View { ...props } style={ style }>{children}</View>
  }
}

namespace Row {
  export type Props = ViewProps & Style.Props & Event.On<Event.View> & { size?: number }
}

export default Row
