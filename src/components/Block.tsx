import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

class Block extends React.Component<Block.Props> {
  private parser = () => {
    const { onPress, children, style, touchBefore, ...rest } = this.props
    const { highlight, opacity, non, ...more } = rest

    const flatten = StyleSheet.flatten( style )
    const rootStyle = styled( more, flatten )
    const rootProps = styled.removeProps( more )

    return {
      style: rootStyle,
      props: rootProps,
      before: touchBefore,
      touch: { onPress, highlight, opacity, non, simple: true } as Touch.Simple,
      children
    }
  }
  public render = () => {
    const { before, props, style, touch, children } = this.parser()

    if ( before ) return <Touch { ...touch }>
      <View { ...props } style={ style }>{children}</View>
    </Touch>

    return <View { ...props } style={ style }>
      <Touch { ...touch }>{children}</Touch>
    </View>
  }
}

namespace Block {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
    touchBefore?: boolean
  }
}

export default Block
