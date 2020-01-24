import React from 'react';
import { ViewProps } from 'react-native';
import Styled from '../utils/Styled';
declare class Block extends React.Component<Block.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Block {
    type Props = ViewProps & Styled.Props;
}
export default Block;
