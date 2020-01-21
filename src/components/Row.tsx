import React from 'react'
import { View, ViewProps, TouchableOpacityProps, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'
import Touch from './Touch'

const Row: React.StatelessComponent<Row.Props> = props => {
  const { onPress, children, style, touchAfter, ...rest } = props
  const { highlight, opacity, non, ...more } = rest

  const flatten = StyleSheet.flatten( style )
  const rootStyle: ViewStyle = {
    ...styled( rest, flatten ),
    flexDirection: 'row',
    flex: props.size ?? ( flatten && flatten.height ) ? 0 : 1,
  }
  const rootProps = styled.removeProps( more )

  if ( touchAfter ) return <View { ...rootProps } style={ rootStyle }>
    <Touch simple onPress={ onPress } { ...{ highlight, opacity, non } as any }>{children}</Touch>
  </View>

  return <Touch simple onPress={ onPress } { ...{ highlight, opacity, non } as any }>
    <View { ...rootProps } style={ rootStyle }>{children}</View>
  </Touch>
}

namespace Row {
  export type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
    onPress?: TouchableOpacityProps['onPress']
    touchAfter?: boolean
    size?: number
  }
}

export default Row
