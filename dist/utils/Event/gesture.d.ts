import Event from '.';
import { GestureResponderHandlers } from 'react-native';
declare const gesture: <P extends Event.Gesture>({ moveShouldSetResponder, moveShouldSetResponderCapture, responderEnd, responderGrant, responderMove, responderReject, responderRelease, responderStart, responderTerminate, responderTerminationRequest, startShouldSetResponder, startShouldSetResponderCapture, ...props }: P) => {
    events: GestureResponderHandlers;
    props: Pick<P, Exclude<keyof P, "moveShouldSetResponder" | "moveShouldSetResponderCapture" | "responderEnd" | "responderGrant" | "responderMove" | "responderReject" | "responderRelease" | "responderStart" | "responderTerminate" | "responderTerminationRequest" | "startShouldSetResponder" | "startShouldSetResponderCapture">>;
};
export default gesture;
