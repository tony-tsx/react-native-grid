import React from 'react';
import { ViewProps } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
declare class Block extends React.Component<Block.Props> {
    private parser;
    render: () => JSX.Element;
}
declare namespace Block {
    type Props = ViewProps & Style.Props & Event.On<Event.View>;
}
export default Block;
