import { ViewStyle } from 'react-native'

export interface StyledOptions {
  center?: boolean
  align?: boolean | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  justify?: boolean | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
}

const styled = ( { center, align, justify }: StyledOptions, initial?: ViewStyle ) => {
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

  return style
}

export default styled
