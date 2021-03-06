import React from 'react'
import { View, ViewProps } from 'react-native'
import Style from '../utils/Style'
import Event from '../utils/Event'

const Block: React.StatelessComponent<Block.Props> = ( { children, on, ...rest } ) => {
  const { style, props } = Style.parser( rest )
  if ( on ) Object.assign( props, Event.parsers.view( on ).events )
  return <View { ...props } style={ style }>{ children }</View>
}

namespace Block {
  export type Props = ViewProps & Style.Props & Event.On<Event.View>
}

export default Block
