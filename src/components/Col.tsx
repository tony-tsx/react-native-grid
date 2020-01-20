import React from 'react'
import { View, ViewProps, TouchableOpacityProps, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import styled, { StyledOptions } from '../utils/styled'

const Col: React.StatelessComponent<Col.Props> = props => {
  const { onPress, style, children, align, center, justify, ...rest } = props
  const flatten = StyleSheet.flatten( style )

  const rootStyle: ViewStyle = {
    flexDirection: 'column',
    flex: props.size ? props.size : ( flatten && flatten.width ) ? 0 : 1,
    ...styled( { align, center, justify }, flatten ),
  }

  const col = <View style={ [ flatten, rootStyle ] } { ...rest }>{children}</View>
  if ( onPress ) return <TouchableOpacity style={ [ flatten, rootStyle ] } onPress={ onPress }>{col}</TouchableOpacity>
  return col
}

namespace Col {
  export interface Props extends ViewProps, StyledOptions {
    onPress?: TouchableOpacityProps['onPress']
    size?: number
  }
}

export default Col
