import { StyleSheet, Dimensions } from 'react-native'
import Style from '.'
const { width, height } = Dimensions.get( 'screen' )

const parser = <P extends Style.Props>( {
  align,
  center,
  justify,
  absolute,
  relative,
  radius,
  bg,
  shadow,
  row,
  reverse,
  flex,
  percent,
  h,
  m,
  p,
  w,
  overflow,
  index,
  style: propStyle,
  ...props
}: P ): { style: Style.Styles.Merge, props: Omit<P, keyof Style.Props> } => {
  const style: Style.Styles.Merge = {}

  if ( align )
    switch ( align ) {
      case 'baseline':
      case 'stretch':
        style.alignItems = align
        break
      case 'start':
      case 'end':
        style.alignItems = `flex-${align}` as 'flex-start' | 'flex-end'
      default: style.alignItems = 'center'
    }

  if ( justify )
    switch ( justify ) {
      case 'end':
      case 'start':
        style.justifyContent = `flex-${justify}` as 'flex-start' | 'flex-end'
        break
      case 'around':
      case 'between':
      case 'evenly':
        style.justifyContent = `space-${justify}` as 'space-between' | 'space-around' | 'space-evenly'
        break
      default:
        style.justifyContent = 'center'
        break
    }

  if ( center ) {
    if ( !style.alignItems ) style.alignItems = 'center'
    if ( !style.justifyContent ) style.justifyContent = 'center'
  }

  if ( relative ) style.position = 'relative'
  else if ( absolute ) style.position = 'absolute'

  if ( radius || radius === 0 )
    if ( Array.isArray( radius ) )
      if ( radius.length === 2 ) {

        style.borderTopLeftRadius = radius[0]
        style.borderTopRightRadius = radius[1]
        style.borderBottomRightRadius = radius[0]
        style.borderBottomLeftRadius = radius[1]

      } else if ( radius.length === 3 ) {

        style.borderTopLeftRadius = radius[0]
        style.borderTopRightRadius = radius[1]
        style.borderBottomRightRadius = radius[2]
        style.borderBottomLeftRadius = radius[1]

      } else {

        style.borderTopLeftRadius = radius[0]
        style.borderTopRightRadius = radius[1]
        style.borderBottomRightRadius = radius[2]
        style.borderBottomLeftRadius = radius[3]

      }

    else style.borderRadius = radius

  if ( bg ) style.backgroundColor = bg

  if ( shadow ) {
    const num = typeof shadow === 'number' ? shadow : 5
    style.elevation = num
    style.shadowColor = 'black'
    style.shadowOffset = { width: 0, height: num * .5 }
    style.shadowOpacity = 0.3
    style.shadowRadius = .8 * num
  }

  if ( row ) style.flexDirection = 'row'

  if ( reverse )
    if ( style.flexDirection === 'row' ) style.flexDirection = 'row-reverse'
    else style.flexDirection = 'column-reverse'

  if ( flex ) style.flex = typeof flex === 'number' ? flex : 1

  if ( h )

    if ( Array.isArray( h ) ) {

      const [ dheight, maxHeight, minHeight ] = h

      if ( percent ) {

        style.height = dheight ? height * dheight : undefined
        style.maxHeight = maxHeight ? height * maxHeight : undefined
        style.minHeight = minHeight ? height * minHeight : undefined

      } else {

        style.height = dheight ?? undefined
        style.maxHeight = maxHeight ?? undefined
        style.minHeight = minHeight ?? undefined

      }

    } else if ( typeof h === 'number' )

      if ( percent ) style.height = height * h

      else style.height = h

    else style.height = height

  if ( w )

    if ( Array.isArray( w ) ) {

      const [ dwidth, maxWidth, minWidth ] = w

      if ( percent ) {

        style.width = dwidth ? width * dwidth : style.width
        style.maxWidth = maxWidth ? width * maxWidth : style.maxWidth
        style.minWidth = minWidth ? width * minWidth : style.minWidth

      } else {

        style.width = dwidth ?? style.width
        style.maxWidth = maxWidth ?? style.maxWidth
        style.minWidth = minWidth ?? style.minWidth

      }

    } else if ( typeof w === 'number' )

      if ( percent ) style.width = width * w

      else style.width = w

    else style.width = width

  if ( m || m === 0 )

    if ( Array.isArray( m ) )

      if ( m.length === 2 ) {

        style.marginVertical = m[0]
        style.marginHorizontal = m[1]

      } else if ( m.length === 3 ) {

        style.marginTop = m[0]
        style.marginLeft = m[1]
        style.marginBottom = m[2]
        style.marginRight = m[1]

      } else {

        style.marginTop = m[0]
        style.marginLeft = m[1]
        style.marginBottom = m[2]
        style.marginRight = m[3]

      }

    else style.margin = m

  if ( p || p === 0 )

    if ( Array.isArray( p ) )

      if ( p.length === 2 ) {

        style.paddingVertical = p[0]
        style.paddingHorizontal = p[1]

      } else if ( p.length === 3 ) {

        style.paddingTop = p[0]
        style.paddingLeft = p[1]
        style.paddingBottom = p[2]
        style.paddingRight = p[1]

      } else {

        style.paddingTop = p[0]
        style.paddingLeft = p[1]
        style.paddingBottom = p[2]
        style.paddingRight = p[3]

      }

    else style.padding = p

  // @ts-ignore
  if ( overflow ) style.overflow = typeof overflow === 'string' ? overflow : 'hidden'

  if ( index ) style.zIndex = index

  return { style: StyleSheet.flatten( [ style, propStyle ] ) as Style.Styles.Merge, props }
}

export default parser