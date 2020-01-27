import Event from '.';
const view = ({ layout, ...one }) => {
    const events = {};
    if (layout)
        events.onLayout = layout;
    const { events: gestureEvents, props: two } = Event.parsers.gesture(one);
    const { events: accessibilityEvents, props: tree } = Event.parsers.accessibility(two);
    const { events: touchableEvents, props: four } = Event.parsers.touchable(tree);
    return { events: Object.assign(events, gestureEvents, accessibilityEvents, touchableEvents), props: four };
};
export default view;
