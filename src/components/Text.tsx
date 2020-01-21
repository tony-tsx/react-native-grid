import React from 'react'
import { StyleSheet, TextStyle, TextProps, Text as NativeText } from 'react-native'

type Text = React.StatelessComponent<Text.Props> & {
  presets: StyleSheet.NamedStyles<{
    h1: TextStyle
    h2: TextStyle
    h3: TextStyle
    h4: TextStyle
    h5: TextStyle
    h6: TextStyle
    p: TextStyle
  }>
}

const Text: Text = props => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    children,
    style: propStyle,

    italic,
    bold,
    variant,
    vertical,
    align,
    decoration,
    direction,
    family,
    spacing,
    transform,

    ...rest
  } = props

  const style: TextStyle = {}

  if ( italic ) style.fontStyle = 'italic'
  if ( bold ) style.fontWeight = 'bold'
  if ( variant ) style.fontVariant = Array.isArray( variant ) ? variant : [ variant ]

  style.textAlignVertical = vertical
  style.textAlign = align
  style.textDecorationStyle = decoration
  style.letterSpacing = spacing
  style.textTransform = transform

  if ( family ) style.fontFamily = family
  if ( true ) void 0
  if ( true ) void 0
  if ( true ) void 0

  if ( h1 ) return <NativeText { ...rest } style={ [ Text.presets.h1, style, propStyle ] }>{children}</NativeText>
  if ( h2 ) return <NativeText { ...rest } style={ [ Text.presets.h2, style, propStyle ] }>{children}</NativeText>
  if ( h3 ) return <NativeText { ...rest } style={ [ Text.presets.h3, style, propStyle ] }>{children}</NativeText>
  if ( h4 ) return <NativeText { ...rest } style={ [ Text.presets.h4, style, propStyle ] }>{children}</NativeText>
  if ( h5 ) return <NativeText { ...rest } style={ [ Text.presets.h5, style, propStyle ] }>{children}</NativeText>
  if ( h6 ) return <NativeText { ...rest } style={ [ Text.presets.h6, style, propStyle ] }>{children}</NativeText>

  return <NativeText { ...rest } style={ [ style, Text.presets.p, propStyle ] }>{children}</NativeText>
}

namespace Text {
  export interface Props extends TextProps {
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
    h5?: boolean
    h6?: boolean

    italic?: boolean

    bold?: boolean

    family?: string

    line?: 'none' | 'underline' | 'line-through' | 'underline line-through'

    variant?: 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums' | ( 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums' )[]

    vertical?: 'auto' | 'top' | 'bottom' | 'center'

    align?: 'auto' | 'left' | 'right' | 'center' | 'justify'

    spacing?: number

    decoration?: 'solid' | 'double' | 'dotted' | 'dashed'

    transform?: 'uppercase' | 'lowercase' | 'capitalize'

    direction?: 'auto' | 'ltr' | 'rtl'
  }
}

Text.presets = {
  h1: { fontSize: 40 },
  h2: { fontSize: 34 },
  h3: { fontSize: 28 },
  h4: { fontSize: 22 },
  h5: { fontSize: 16, textDecorationLine: 'underline' },
  h6: { fontSize: 13 },
  p: { fontSize: 12 },
}

export default Text
