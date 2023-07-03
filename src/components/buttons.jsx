import React from 'react'
import withCalculate from '../utils/withCalculate'
function buttons(props) {
  return (
    <div>
      <h3>x + {props.counter}</h3>
    <p>{props.nomor}</p>
    <button onClick={props.handleNomor}>tambah</button>
    </div>
  )
}
export default withCalculate(buttons)
