import React, { Children } from 'react';
import { FlatList } from 'react-native';
import Event from '../utils/Event';
const Normalize = (data, columns) => {
    const resource = data.slice();
    while (resource.length % columns)
        resource.push({ empty: true });
    return resource;
};
const Grid = ({ data: unnormalized, cols, footer, header, children, on, ...props }) => {
    const data = ('normalize' in props && props.normalize) ? Normalize(unnormalized, cols || 1) : unnormalized;
    const count = Children.count(children);
    let render;
    if (children)
        if (count === 1) {
            const child = Children.only(children);
            if (!React.isValidElement(child))
                throw new Error('Only Children required type valid Element');
            const { children: childrenOfChildren, ...props } = child.props;
            render = ({ index, item, separators }) => React.cloneElement(child, { index, separators, ...item, ...props }, childrenOfChildren);
        }
        else
            render = ({ index, item, separators }) => (<>
            {Children.map(children, child => {
                if (React.isValidElement(child)) {
                    const { children, ...props } = child.props;
                    return React.cloneElement(child, { index, separators, ...item, ...props }, children);
                }
                return child;
            })}
          </>);
    else if ('component' in props)
        render = ({ index, item, separators }) => <props.component index={index} separators={separators} {...item}/>;
    else if ('render' in props && typeof props.render === 'function')
        render = props.render;
    else
        render = () => null;
    const events = on ? Event.parsers.scroll(on).events : {};
    return <FlatList data={data} renderItem={render} numColumns={cols} ListHeaderComponent={header} ListFooterComponent={footer} {...events}/>;
};
export default Grid;
