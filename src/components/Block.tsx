import React from 'react'
import { View, ViewProps } from 'react-native'
import Style from '../utils/Style'
import Event from '../utils/Event'

class Block extends React.Component<Block.Props> {
  private parser = () => {
    const { children, ...rest } = this.props

    const { style, props } = Style.parser( rest )

    if ( props.on ) Object.assign( props, Event.parsers.view( props.on ).events )
    delete props.on

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

namespace Block {
  export type Props = ViewProps & Style.Props & Event.On<Event.View>
}

export default Block
