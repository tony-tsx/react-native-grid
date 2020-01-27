const touchable = ({ touchCancel, touchEnd, touchEndCapture, touchMove, touchStart, ...props }) => {
    const events = {};
    if (touchCancel)
        events.onTouchCancel = touchCancel;
    if (touchEnd)
        events.onTouchEnd = touchEnd;
    if (touchEndCapture)
        events.onTouchEndCapture = touchEndCapture;
    if (touchMove)
        events.onTouchMove = touchMove;
    if (touchStart)
        events.onTouchStart = touchStart;
    return { events, props };
};
export default touchable;
