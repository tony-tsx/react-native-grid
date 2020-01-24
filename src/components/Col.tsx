import React, { WeakValidationMap } from 'react'
import { View, ViewProps } from 'react-native'
import Styled from '../utils/Styled'
import { number } from 'prop-types'

class Col extends React.Component<Col.Props> {
  public static propTypes: WeakValidationMap<Omit<Col.Props, keyof ViewProps | keyof Styled.Props>> = {
    size: number
  }
  private parser = () => {
    const { children, size, ...rest } = this.props

    const { style, props } = Styled.parser( rest )
    style.flexDirection = 'column',
    style.flex = size ? size : ( style && style.width ) ? 0 : 1

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

namespace Col {
  export type Props = ViewProps & Styled.Props & { size?: number }
}

export default Col
