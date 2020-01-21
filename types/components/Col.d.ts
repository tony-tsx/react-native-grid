import React from 'react';
import { ViewProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare class Col extends React.Component<Col.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Col {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
        size?: number;
        touchAfter?: boolean;
    };
}
export default Col;
