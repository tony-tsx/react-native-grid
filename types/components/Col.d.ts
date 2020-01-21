import React from 'react';
import { ViewProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare const Col: React.StatelessComponent<Col.Props>;
declare namespace Col {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
        size?: number;
    };
}
export default Col;
