import React from 'react'
import { create } from 'react-test-renderer'
import Grid from '../src/components/Grid'
import Block from '../src/components/Block'

test( 'Component Grid', () => {
  const component = create( (
    <Grid data={ [ '' ] }>
      <Block flex />
    </Grid>
  ) )
  console.log( component.toJSON() )
} )
