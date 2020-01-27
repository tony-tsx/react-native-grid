const gesture = ({ moveShouldSetResponder, moveShouldSetResponderCapture, responderEnd, responderGrant, responderMove, responderReject, responderRelease, responderStart, responderTerminate, responderTerminationRequest, startShouldSetResponder, startShouldSetResponderCapture, ...props }) => {
    const events = {};
    if (moveShouldSetResponder)
        events.onMoveShouldSetResponder = moveShouldSetResponder;
    if (moveShouldSetResponderCapture)
        events.onMoveShouldSetResponderCapture = moveShouldSetResponderCapture;
    if (responderEnd)
        events.onResponderEnd = responderEnd;
    if (responderGrant)
        events.onResponderGrant = responderGrant;
    if (responderMove)
        events.onResponderMove = responderMove;
    if (responderReject)
        events.onResponderReject = responderReject;
    if (responderRelease)
        events.onResponderRelease = responderRelease;
    if (responderStart)
        events.onResponderStart = responderStart;
    if (responderTerminate)
        events.onResponderTerminate = responderTerminate;
    if (responderTerminationRequest)
        events.onResponderTerminationRequest = responderTerminationRequest;
    if (startShouldSetResponder)
        events.onStartShouldSetResponder = startShouldSetResponder;
    if (startShouldSetResponderCapture)
        events.onStartShouldSetResponderCapture = startShouldSetResponderCapture;
    return { events, props };
};
export default gesture;
