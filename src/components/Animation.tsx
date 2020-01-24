import React, { Component, PureComponent, ComponentType, WeakValidationMap } from 'react'
import { Animated, ViewStyle } from 'react-native'
import Types from 'prop-types'

type P<C> =
C extends new ( ...args: any ) => Component< infer P > ? P :
C extends new ( ...args: any ) => PureComponent< infer P > ? P :
never

type Props<C> = { component: any, style?: {
  [K in keyof ViewStyle]: ViewStyle[K] | InstanceType<typeof Animated.Value>
} } & ( P<C> extends never ? { [key: string]: any } : P<C> )

const storage: any = {}

class Animation<C> extends Component<Props<C>> {
  public static propTypes: WeakValidationMap<Props<any>> = {
    component: Types.elementType.isRequired
  }
  private Component: ComponentType<Props<C>>
  constructor( props: Props<C> ) {
    super( props )
    if ( !props.component ) throw new Error( 'component as required' )
    if ( !( '__animation__' in props.component && typeof props.component.__animation__ === 'symbol' ) ) {
      props.component.__animation__ = Symbol( `${props.component.name}__animation__` )
      storage[props.component.__animation__] = Animated.createAnimatedComponent( props.component )
    }
    this.Component = storage[props.component.__animation__]
  }
  public render = () => {
    const { children, component, ...rest } = this.props
    return <this.Component {...rest as any}>{children}</this.Component>
  }
}

namespace Animation {}

export default Animation
