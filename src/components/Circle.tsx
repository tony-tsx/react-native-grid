import React, { WeakValidationMap } from 'react'
import { ViewProps, View } from 'react-native'
import Style from '../utils/Style'
import { number } from 'prop-types'
import Event from '../utils/Event'

class Circle extends React.Component<Circle.Props> {
  public static propTypes: WeakValidationMap<Omit<Circle.Props, keyof ViewProps | keyof Style.Props>> = {
    size: number.isRequired
  }
  private parser = () => {
    const { children, size, on, ...rest } = this.props

    const { style, props } = Style.parser( rest )

    if ( on ) Object.assign( props, Event.parsers.view( on ).events )

    style.width = size,
    style.height = size,
    style.borderRadius = size / 2

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

namespace Circle {
  export type Props = ViewProps & Style.Props & Event.On<Event.View> & { size: number }
}

export default Circle
