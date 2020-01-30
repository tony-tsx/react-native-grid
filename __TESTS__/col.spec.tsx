import React from 'react'
import { create } from 'react-test-renderer'
import { Block } from '../src'
test( 'Component Row', () => {
  const component = create( <Block flex row/> )
  console.log( component.toJSON() )
} )
