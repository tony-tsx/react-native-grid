import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

class Block extends React.Component<Block.Props> {
  private parser = () => {
    const { onPress, children, style, touchAfter, ...rest } = this.props
    const { highlight, opacity, non, ...more } = rest

    const flatten = StyleSheet.flatten( style )
    const rootStyle = styled( more, flatten )
    const rootProps = styled.removeProps( more )

    return {
      style: rootStyle,
      props: rootProps,
      after: touchAfter,
      touch: { onPress, highlight, opacity, non, simple: true } as Touch.Simple,
      children
    }
  }
  public render = () => {
    const { after, props, style, touch, children } = this.parser()

    if ( after ) return <View { ...props } style={ style }>
      <Touch { ...touch }>{children}</Touch>
    </View>

    return <Touch { ...touch }>
      <View { ...props } style={ style }>{children}</View>
    </Touch>
  }
}

namespace Block {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
    touchAfter?: boolean
  }
}

export default Block
