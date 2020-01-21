import React from 'react'
import { ViewProps, View, ViewStyle, StyleSheet } from 'react-native'
import Touch from './Touch'
import styled from '../../types/utils/styled'
import { StyledOptions } from '../utils/styled'

const Circle: React.StatelessComponent<Circle.Props> = props => {
  const { touchAfter, style: propStyle, children, size, ...rest } = props
  const { highlight, opacity, non, ...more } = rest

  const flatten = StyleSheet.flatten( propStyle )
  const style: ViewStyle = {
    ...styled( more, flatten ),
    width: size,
    height: size,
    borderRadius: size / 2
  }

  const root = styled.removeProps( more )

  return <View { ...root } style={ style }>{ children }</View>
}

namespace Circle {
  export type Props = ViewProps & Omit<Touch.Simple, 'simple'> & StyledOptions & {
    touchAfter?: boolean
    size: number
  }
}

export default Circle
