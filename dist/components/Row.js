"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Row = props => {
    const { onPress, style, children, ...rest } = props;
    const flatten = react_native_1.StyleSheet.flatten(style);
    const rootStyle = {
        flexDirection: 'row',
        flex: props.size ?? (flatten && flatten.height) ? 0 : 1,
    };
    const col = <react_native_1.View style={[flatten, rootStyle]} {...rest}>{children}</react_native_1.View>;
    if (onPress)
        return <react_native_1.TouchableOpacity style={[flatten, rootStyle]} onPress={onPress}>{col}</react_native_1.TouchableOpacity>;
    return col;
};
exports.default = Row;
