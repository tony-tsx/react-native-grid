import React, { WeakValidationMap } from 'react'
import { ViewProps, View } from 'react-native'
import Styled from '../utils/Styled'
import { number } from 'prop-types'

class Circle extends React.Component<Circle.Props> {
  public static propTypes: WeakValidationMap<Omit<Circle.Props, keyof ViewProps | keyof Styled.Props>> = {
    size: number.isRequired
  }
  private parser = () => {
    const { children, size, ...rest } = this.props

    const { style, props } = Styled.parser( rest )

    style.width = size,
    style.height = size,
    style.borderRadius = size / 2

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

namespace Circle {
  export type Props = ViewProps & Styled.Props & { size: number }
}

export default Circle
