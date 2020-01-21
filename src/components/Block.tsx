import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

const Block: React.StatelessComponent<Block.Props> = props => {
  const { onPress, children, style, ...rest } = props
  const { highlight, opacity, non, ...more } = rest

  const flatten = StyleSheet.flatten( style )
  const rootStyle = styled( more, flatten )
  const rootProps = styled.removeProps( more )

  // @ts-ignore
  return <Touch simple onPress={ onPress } { ...{ highlight, opacity, non } }>
    <View { ...rootProps } style={ rootStyle }>{children}</View>
  </Touch>
}

namespace Block {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'>
}

export default Block
