import React, { ComponentType } from 'react'
import { Animated, ViewStyle } from 'react-native'

interface Props {
  component: ComponentType
  style?: { [K in keyof ViewStyle]: ViewStyle[K] | InstanceType<typeof Animated.Value> }
  [key: string]: any
}

const storage: any = {}

const register = ( component: any ) => {
  component.__animation__ = Symbol( `${component.name}--animation--` )
  storage[component.__animation__] = Animated.createAnimatedComponent( component )
}

const retriver = ( component: any ): ComponentType => storage[component.__animation__] || null

const check = ( component: any ) => '__animation__' in component && typeof component.__animation__ === 'symbol'

const norm = ( component: any ) => {
  if ( !check( component ) ) register( component )
  return retriver( component )
}

const Animation: React.StatelessComponent<Props> = ( { component, children, style, ...rest } ) => {
  const Component = norm( component )
  return <Component {...rest}>{children}</Component>
}

namespace Animation {}

export default Animation
