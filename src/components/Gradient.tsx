import React, { Component } from 'react'
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient'
import Style from '../utils/Style'
import Event from '../utils/Event'

// @ts-ignore
( LinearGradient.defaultProps as LinearGradientProps ) = { ...( LinearGradient.defaultProps, {} ),
  useAngle: true
}

class Gradient extends Component<Gradient.Props> {
  public render = () => {
    const { linear, radial, children, on, ...rest } = this.props
    const { style, props } = Style.parser( rest )
    if ( on ) Object.assign( props, Event.parsers.view( on ).events )
    if ( radial ) throw new Error( 'Radial Dont Supported' )
    return ( <LinearGradient { ...props as LinearGradientProps } style={ style }>{children}</LinearGradient> )
  }
}

namespace Gradient {
  type Linear = LinearGradientProps & Style.Props & Event.On<Event.View> & {
    linear: true
    radial?: undefined | false
  }
  type Radial = Style.Props & Event.On<Event.View> & {
    radial: true
    linear?: undefined | false
  }

  export type Props = Linear | Radial
}

export default Gradient
