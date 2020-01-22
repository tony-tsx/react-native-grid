import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

class Col extends React.Component<Col.Props> {
  private parser = () => {
    const { onPress, children, style, touchAfter, size, ...rest } = this.props
    const { highlight, opacity, non, ...more } = rest

    const flatten = StyleSheet.flatten( style )

    const rootStyle = styled( more, flatten )
    rootStyle.flexDirection = 'column',
    rootStyle.flex = size ? size : ( flatten && flatten.width ) ? 0 : 1

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

namespace Col {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
    size?: number
    touchAfter?: boolean
  }
}

export default Col
