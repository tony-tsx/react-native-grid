import React from 'react'
import { View, ViewProps, StyleSheet, ViewStyle } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

const Col: React.StatelessComponent<Col.Props> = props => {
  const { onPress, children, style, touchAfter, ...rest } = props
  const { highlight, opacity, non, ...more } = rest

  const flatten = StyleSheet.flatten( style )
  const rootStyle: ViewStyle = {
    ...styled( rest, flatten ),
    flexDirection: 'column',
    flex: props.size ? props.size : ( flatten && flatten.width ) ? 0 : 1,
  }
  const rootProps = styled.removeProps( more )

  if ( touchAfter ) return <View { ...rootProps } style={ rootStyle }>
    <Touch simple onPress={ onPress } { ...{ highlight, opacity, non } as any }>{children}</Touch>
  </View>

  return <Touch simple onPress={ onPress } { ...{ highlight, opacity, non } as any }>
    <View { ...rootProps } style={ rootStyle }>{children}</View>
  </Touch>
}

namespace Col {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
    size?: number
    touchAfter?: boolean
  }
}

export default Col
