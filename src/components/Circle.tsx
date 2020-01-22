import React from 'react'
import { ViewProps, View, StyleSheet } from 'react-native'
import Touch from './Touch'
import styled from '../utils/styled'
import { StyledOptions } from '../utils/styled'

class Circle extends React.Component<Circle.Props> {
  private parser = () => {
    const { onPress, children, style, touchBefore, size, ...rest } = this.props
    const { highlight, opacity, non, ...more } = rest

    const flatten = StyleSheet.flatten( style )
    const rootStyle = styled( more, flatten )

    rootStyle.width = size,
    rootStyle.height = size,
    rootStyle.borderRadius = size / 2

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

namespace Circle {
  export type Props = ViewProps & Omit<Touch.Simple, 'simple'> & StyledOptions & {
    touchBefore?: boolean
    size: number
  }
}

export default Circle
