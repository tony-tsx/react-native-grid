import React, { ComponentType } from 'react';
import { ListRenderItem } from 'react-native';
import Event from '../utils/Event';
interface Empty {
    empty: true;
}
interface CommonProps<D> extends Event.On<Event.Scroll> {
    data: readonly D[];
    cols?: number;
    header?: JSX.Element;
    footer?: JSX.Element;
}
declare type RenderOptionsWithoutEmpty<D> = {
    children: JSX.Element | JSX.Element[];
} | {
    render: ListRenderItem<D>;
} | {
    component: Grid.ComponentRender<D>;
};
declare type RenderOptionsWithEmpty<D> = {
    normalize: true;
    children: JSX.Element | JSX.Element[];
} | {
    normalize: true;
    render: ListRenderItem<D | Empty>;
} | {
    normalize: true;
    component: Grid.ComponentRender<D | Empty>;
};
declare type RenderOptions<D> = RenderOptionsWithoutEmpty<D> | RenderOptionsWithEmpty<D>;
declare type MiddleProps<D> = CommonProps<D> & RenderOptions<D>;
declare const Grid: <D extends any>({ data: unnormalized, cols, footer, header, children, on, ...props }: React.PropsWithChildren<MiddleProps<D>>) => JSX.Element;
declare namespace Grid {
    type ComponentRender<D> = ComponentType<Parameters<ListRenderItem<D | Empty>>[0]['item'] & Pick<Parameters<ListRenderItem<D | Empty>>[0], 'index' | 'separators'>>;
}
export default Grid;
