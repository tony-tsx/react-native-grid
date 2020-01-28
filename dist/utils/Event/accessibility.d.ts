import Event from '.';
import { AccessibilityProps } from 'react-native';
declare const accessibility: <P extends Event.Accessibility>({ accessibilityAction, accessibilityTap, magicTap, ...props }: P) => {
    events: AccessibilityProps;
    props: Pick<P, Exclude<keyof P, "magicTap" | "accessibilityAction" | "accessibilityTap">>;
};
export default accessibility;
