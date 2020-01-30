import React from 'react'
import { Row } from '..'
import { create } from 'react-test-renderer'

test( 'Component Row', () => {
  const component = create( <Row /> )
  console.log( component.toJSON() )
} )
