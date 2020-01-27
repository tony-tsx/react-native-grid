import Event from '.';
const scroll = ({ contentSizeChange, momentumScrollBegin, momentumScrollEnd, scroll, scrollAnimationEnd, scrollBeginDrag, scrollEndDrag, ...one }) => {
    const events = {};
    if (contentSizeChange)
        events.onContentSizeChange = contentSizeChange;
    if (momentumScrollBegin)
        events.onMomentumScrollBegin = momentumScrollBegin;
    if (momentumScrollEnd)
        events.onMomentumScrollEnd = momentumScrollEnd;
    if (scroll)
        events.onScroll = scroll;
    if (scrollAnimationEnd)
        events.onScrollAnimationEnd = scrollAnimationEnd;
    if (scrollBeginDrag)
        events.onScrollBeginDrag = scrollBeginDrag;
    if (scrollEndDrag)
        events.onScrollEndDrag = scrollEndDrag;
    const { events: viewEvents, props: two } = Event.parsers.view(one);
    return { events: Object.assign(events, viewEvents), props: two };
};
export default scroll;
