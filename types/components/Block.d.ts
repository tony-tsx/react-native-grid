import React from 'react';
import { ViewProps } from 'react-native';
import { StyledOptions } from '../utils/styled';
import Touch from './Touch';
declare const Block: React.StatelessComponent<Block.Props>;
declare namespace Block {
    type Props = ViewProps & StyledOptions & Omit<Touch.Simple, 'simple'>;
}
export default Block;
