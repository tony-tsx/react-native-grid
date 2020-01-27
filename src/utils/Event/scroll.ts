import Event from '.'
import { ScrollViewProps } from 'react-native'

const scroll = <P extends Event.Scroll>( {
  contentSizeChange,
  momentumScrollBegin,
  momentumScrollEnd,
  scroll,
  scrollAnimationEnd,
  scrollBeginDrag,
  scrollEndDrag,
  ...one
}: P ) => {
  const events: ScrollViewProps = {}
  if ( contentSizeChange ) events.onContentSizeChange = contentSizeChange
  if ( momentumScrollBegin ) events.onMomentumScrollBegin = momentumScrollBegin
  if ( momentumScrollEnd ) events.onMomentumScrollEnd = momentumScrollEnd
  if ( scroll ) events.onScroll = scroll
  if ( scrollAnimationEnd ) events.onScrollAnimationEnd = scrollAnimationEnd
  if ( scrollBeginDrag ) events.onScrollBeginDrag = scrollBeginDrag
  if ( scrollEndDrag ) events.onScrollEndDrag = scrollEndDrag

  const { events: viewEvents, props: two } = Event.parsers.view( one )
  return { events: Object.assign( events, viewEvents ), props: two }
}

export default scroll
