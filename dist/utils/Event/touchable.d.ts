import Event from '.';
import { Touchable as TouchableProps } from 'react-native';
declare const touchable: <P extends Event.Touchable>({ touchCancel, touchEnd, touchEndCapture, touchMove, touchStart, ...props }: P) => {
    events: TouchableProps;
    props: Pick<P, Exclude<keyof P, "touchCancel" | "touchEnd" | "touchEndCapture" | "touchMove" | "touchStart">>;
};
export default touchable;
