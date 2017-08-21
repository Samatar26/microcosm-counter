import React from 'react'
import ActionButton from 'microcosm/addons/action-button'
import {increment, decrement} from '../actions/count'

const Counter = ({count = 0}) => {
  return <div>
    <ActionButton action={increment} value={1}>+</ActionButton>
    <span>{count}</span>
    <ActionButton action={decrement} value={-1}>-</ActionButton>
  </div>
}

export default Counter