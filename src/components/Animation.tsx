import React, { ComponentType } from 'react'
import { Animated } from 'react-native'
import Style from '../utils/Style'

type RequestComponentType = ComponentType< { [key: string]: any} >

const animation = Symbol( 'animation-component' )

interface Props extends Omit<Style.Animation.Props, 'style'> {
  component: RequestComponentType
  style?: Style.Animation.Style
  [key: string]: any
}

const register = ( component: any ): RequestComponentType =>
  component[animation] = Animated.createAnimatedComponent( component )

const retriver = ( component: any ): RequestComponentType => component[animation] || null

const check = ( component: any ) => !!component[animation]

const norm = ( component: any ) => {
  if ( !check( component ) ) return register( component )
  return retriver( component )
}

const Animation: React.StatelessComponent<Props> = ( { component, ...rest } ) => {
  const Component = norm( component )
  const { style, props } = Style.parser( rest )
  return <Component {...props} style={ style }/>
}

namespace Animation {}

export default Animation
