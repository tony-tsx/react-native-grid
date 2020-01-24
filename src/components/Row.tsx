import React, { WeakValidationMap } from 'react'
import { View, ViewProps } from 'react-native'
import Styled from '../utils/Styled'
import { number } from 'prop-types'

class Row extends React.Component<Row.Props> {
  public static propTypes: WeakValidationMap<Omit<Row.Props, keyof ViewProps | keyof Styled.Props>> = {
    size: number
  }
  private parser = () => {
    const { children, size, ...rest } = this.props

    const { style, props } = Styled.parser( rest )
    style.flexDirection = 'row',
    style.flex = size ? size : ( style && style.height ) ? 0 : 1

    return {
      style,
      props,
      children
    }
  }
  public render = () => {
    const { props, style, children } = this.parser()

    return <View { ...props } style={ style }>{children}</View>
  }
}

namespace Row {
  export type Props = ViewProps & Styled.Props & { size?: number }
}

export default Row
