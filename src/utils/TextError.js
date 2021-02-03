/* eslint-disable react/prop-types */
import React from 'react';
import { Error } from './styles'

export const TextError = (props) => {
  return (
    <Error>
      {props.children}
    </Error>
  )
}
