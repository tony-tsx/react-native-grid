import { ViewStyle, TextStyle, ImageStyle, Animated } from 'react-native'
import styledParser from './parser'

type DeepMerge<A, B> = {
  [K in keyof A]: K extends keyof B ?
    B[K] extends object ?
      A[K] extends object ? DeepMerge<A[K], B[K]>
      : B[K] | A[K]
    : B[K] | A[K]
  : A[K]
} & {
  [K in keyof B]: K extends keyof A ?
    B[K] extends object ?
      A[K] extends object ? DeepMerge<A[K], B[K]>
      : B[K] | A[K]
    : B[K] | A[K]
  : B[K]
}

namespace Style {

  export const parser = styledParser

  export namespace Animation {
    export type Style = {
      [K in keyof Styles.Merge]:
        Styles.Merge[K] extends string | number | undefined ?
          Animated.Value | Styles.Merge[K] | Animated.AnimatedInterpolation :
        Styles.Merge[K] extends ( infer U )[] ?
          U extends string | number | undefined ?
            Animated.Value | Styles.Merge[K] | Animated.AnimatedInterpolation : U :
        Styles.Merge[K] extends object ? {
          [K2 in keyof Styles.Merge[K]]:
          Styles.Merge[K][K2] extends string | number | undefined ?
            Animated.Value | Styles.Merge[K] | Animated.AnimatedInterpolation : Styles.Merge[K][K2]
        } : Styles.Merge[K]
    }
    export type Resolution =
      | boolean
      | number | Animated.Value
      | [ ( number | Animated.Value )?, ( number | Animated.Value )?, ( number | Animated.Value )? ]

    export type Space =
      | number | Animated.Value
      | [ ( number | Animated.Value )?, ( number | Animated.Value )? ]
      | [ ( number | Animated.Value )?, ( number | Animated.Value )?, ( number | Animated.Value )? ]
      | [
          ( number | Animated.Value )?,
          ( number | Animated.Value )?,
          ( number | Animated.Value )?,
          ( number | Animated.Value )?
        ]

    export interface Flex {
      flex?: boolean | number | Animated.Value
    }

    export interface Direction {
      row?: boolean | number | Animated.Value
      col?: boolean | number | Animated.Value
      reverse?: boolean
    }

    export interface Props extends Centralization, Positions, Spaces, Direction, Flex {
      h?: Resolution
      w?: Resolution
      style?: Styles.Merge | Styles.Change | Style
      radius?: number | Space
      shadow?: boolean | number // | Animated.Value

      bg?: string

      percent?: boolean
      overflow?: boolean | 'visible' | 'hidden' | 'scroll'
      index?: number | Animated.Value

      circle?: boolean

      size?: number | Animated.Value

      full?: boolean
    }
  }

  export namespace Styles {
    export type Merge = DeepMerge<ViewStyle, DeepMerge<TextStyle, ImageStyle>>
    export type Change = ViewStyle | TextStyle | ImageStyle
  }

  export interface Centralization {
    center?: boolean
    align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  }

  export interface Positions {
    absolute?: boolean | Space
    relative?: boolean | Space
  }
  /**
   * The resolution value has 3 forms:
   *
   * 1st boolean is the entire resolution;
   * 2nd number is the value of the resolution itself;
   * 3rd ((string | number)?) [3] is the resolution value, the minimum value and the maximum value respectively;
   */
  export type Resolution =
    | boolean
    | number
    | [ ( number )?, ( number )?, ( number )? ]

  /**
   * The space value has 4 forms
   *
   * 1st number is the value of the resolution itself
   * 2nd number [2] is the vertical and horizontal value respectively
   * 3rd number [3] is the value of the space in relation to the
   * top, right, bottom and left and the same value of the right is attributed to the left.
   * 4th number [3] is the space value in relation to the top, right, bottom and left respectively
   */
  export type Space =
    | number
    | [ ( number )?, ( number )? ]
    | [ ( number )?, ( number )?, ( number )? ]
    | [ ( number )?, ( number )?, ( number )?, ( number )? ]

  interface Resolutions {
    /**
     * Height resolution value
     */
    h?: Resolution
    /**
     * Width resolution value
     */
    w?: Resolution
  }

  export interface Spaces {
    /**
     * Margin spacing value
     */
    m?: Space
    /**
     * Fill spacing value
     */
    p?: Space
  }

  export interface Flex {
    flex?: boolean | number
  }

  export interface Direction {
    row?: boolean | number
    col?: boolean | number
    reverse?: boolean
  }

  export interface Props extends Centralization, Positions, Resolutions, Spaces, Direction, Flex {
    style?: Styles.Merge | Styles.Change
    radius?: number | Space
    shadow?: boolean | number

    bg?: string

    percent?: boolean
    overflow?: boolean | 'visible' | 'hidden' | 'scroll'
    index?: number

    circle?: boolean

    size?: number

    full?: boolean
  }
}

export default Style
