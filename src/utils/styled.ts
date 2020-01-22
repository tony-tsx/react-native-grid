import { ViewStyle } from 'react-native'

export interface StyledOptions {
  center?: boolean
  align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  absolute?: boolean
  relative?: boolean
  radius?: number
  bg?: string
  shadow?: boolean | number
  row?: boolean
  reverse?: boolean
}

const styled = (
  { center, align, justify, absolute, relative, radius, bg, shadow, row, reverse }: StyledOptions,
  initial?: ViewStyle
) => {
  const style: ViewStyle = Object.assign( {}, initial )

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

  return style
}

styled.removeProps = <P extends StyledOptions>( props: P ): Omit<P, keyof StyledOptions> => {
  const { align, center, justify, absolute, relative, radius, bg, shadow, row, reverse, ...rest } = props
  return rest
}

export default styled
