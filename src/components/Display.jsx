import React from 'react'
import './Display.css'

export default function Display({ data }) {
  return (
    <div id="display">
      <div id="top">
        <h4>{data[0].lastNumber}</h4>
        <h4>{data[0].currentOperation}</h4>
      </div>
      <h1>{data[0].number}</h1>
    </div>
  )
}