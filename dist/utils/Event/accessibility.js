const accessibility = ({ accessibilityAction, accessibilityTap, magicTap, ...props }) => {
    const events = {};
    if (accessibilityAction)
        events.onAccessibilityAction = accessibilityAction;
    if (accessibilityTap)
        events.onAccessibilityTap = accessibilityTap;
    if (magicTap)
        events.onMagicTap = magicTap;
    return { events, props };
};
export default accessibility;
