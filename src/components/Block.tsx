import React from 'react'
import { View, ViewProps } from 'react-native'
import Styled from '../utils/Styled'

class Block extends React.Component<Block.Props> {
  private parser = () => {
    const { children, ...rest } = this.props

    const { style, props } = Styled.parser( rest )

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

namespace Block {
  export type Props = ViewProps & Styled.Props
}

export default Block
