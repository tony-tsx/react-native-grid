import { StyleSheet, Dimensions } from 'react-native'
import Styled from '.'
const { width, height } = Dimensions.get( 'screen' )

const parser = <P extends Styled.Props>( {
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
  style: propStyle,
  ...props
}: P ): { style: Styled.Styles.Merge, props: Omit<P, keyof Styled.Props> } => {
  const style: Styled.Styles.Merge = {}

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

  style.borderRadius = radius

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

      const [ height, maxHeight, minHeight ] = h

      style.height = height ?? undefined
      style.maxHeight = maxHeight ?? undefined
      style.minHeight = minHeight ?? undefined

    } else if ( typeof h === 'number' )

      if ( percent ) style.height = height * h

      else style.height = h

    else style.height = height

  if ( w )

    if ( Array.isArray( w ) ) {

      const [ width, maxWidth, minWidth ] = w

      style.width = width ?? style.width
      style.maxWidth = maxWidth ?? style.maxWidth
      style.minWidth = minWidth ?? style.minWidth

    } else if ( typeof w === 'number' )

      if ( percent ) style.height = width * w

      else style.height = w

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

  return { style: StyleSheet.flatten( [ style, propStyle ] ) as Styled.Styles.Merge, props }
}

export default parser
