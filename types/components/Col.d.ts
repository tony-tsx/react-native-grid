import React, { WeakValidationMap } from 'react';
import { ViewProps } from 'react-native';
import Styled from '../utils/Styled';
declare class Col extends React.Component<Col.Props> {
    static propTypes: WeakValidationMap<Omit<Col.Props, keyof ViewProps | keyof Styled.Props>>;
    private parser;
    render: () => JSX.Element;
}
declare namespace Col {
    type Props = ViewProps & Styled.Props & {
        size?: number;
    };
}
export default Col;
