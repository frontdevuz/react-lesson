import React from 'react'
import { Div } from './styled';

export default function Container(props) {
  return (
    <React.Fragment>
      <Div>{props.children}</Div>
    </React.Fragment>
  )
}
