import React, { PropsWithChildren, Children, ComponentType } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import Event from '../utils/Event'

interface Empty { empty: true }

interface CommonProps<D> extends Event.On<Event.Scroll> {
  data: readonly D[]
  cols?: number
  header?: JSX.Element
  footer?: JSX.Element
}

type RenderOptionsWithoutEmpty<D> =
  | { children: JSX.Element | JSX.Element[] }
  | { render: ListRenderItem<D> }
  | { component: Grid.ComponentRender<D> }

type RenderOptionsWithEmpty<D> =
  | { normalize: true, children: JSX.Element | JSX.Element[] }
  | { normalize: true, render: ListRenderItem<D | Empty> }
  | { normalize: true, component: Grid.ComponentRender<D | Empty> }

type RenderOptions<D> = RenderOptionsWithoutEmpty<D> | RenderOptionsWithEmpty<D>

type MiddleProps<D> = CommonProps<D> & RenderOptions<D>

type Props<D> = PropsWithChildren<MiddleProps<D>>

const Normalize =
  <D extends readonly any[]>( data: D, columns: number ):
    readonly ( D extends ( infer U )[] ? U : never | { empty: true } )[] => {
      const resource = data.slice()
      while ( resource.length % columns ) resource.push( { empty: true } )
      return resource
    }

const Grid = <D extends any>( {
  data: unnormalized,
  cols,
  footer,
  header,
  children,
  on,
  ...props
}: Props<D> ) => {

  const data = ( 'normalize' in props && props.normalize ) ? Normalize( unnormalized, cols || 1 ) : unnormalized

  const count = Children.count( children )

  let render: ListRenderItem<D>

  if ( children )

    if ( count === 1 ) {

      const child = Children.only( children )

      if ( !React.isValidElement( child ) ) throw new Error( 'Only Children required type valid Element' )

      const { children: childrenOfChildren, ...props } = child.props

      render = ( { index, item, separators } ) =>
        React.cloneElement( child, { index, separators, ...item, ...props }, childrenOfChildren )

    } else
        render = ( { index, item, separators } ) => (
          <>
            { Children.map( children, child => {
              if ( React.isValidElement( child ) ) {
                const { children, ...props } = child.props
                return React.cloneElement( child, { index, separators, ...item, ...props }, children )
              }
              return child
            } ) }
          </>
        )

  else if ( 'component' in props )
    render = ( { index, item, separators } ) => <props.component index={index} separators={ separators } {...item}/>

  else if ( 'render' in props && typeof props.render === 'function' )
    render = props.render

  else render = () => null

  const events = on ? Event.parsers.scroll( on ).events : {}

  return <FlatList
    data={ data as any[] }
    renderItem={ render }
    numColumns={ cols }
    ListHeaderComponent={ header }
    ListFooterComponent={ footer }
    { ...events }
  />
}

namespace Grid {
  export type ComponentRender<D> = ComponentType<
    & Parameters<ListRenderItem<D | Empty>>[0]['item']
    & Pick<Parameters<ListRenderItem<D | Empty>>[0], 'index' | 'separators'>
  >
}

export default Grid
