import React from 'react';
import { ViewProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare class Block extends React.Component<Block.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Block {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'> & {
        touchAfter?: boolean;
    };
}
export default Block;
