import { ViewStyle } from 'react-native'

export interface StyledOptions {
  center?: boolean
  align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  absolute?: boolean
  relative?: boolean
  radius?: number
}

const styled = (
  { center, align, justify, absolute, relative, radius }: StyledOptions,
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

  return style
}

styled.removeProps = <P extends StyledOptions>( props: P ): Omit<P, keyof StyledOptions> => {
  const { align, center, justify, absolute, relative, radius, ...rest } = props
  return rest
}

export default styled
