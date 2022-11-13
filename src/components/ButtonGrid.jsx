import React from 'react'
import './ButtonGrid.css'
import updateDisplay from '../displayUpdater'

export default function ButtonGrid({ data, setData }) {
  const buttons = [
    { key: "AC", class: "options", id: "reset" },
    { key: "+/-", class: "options" },
    { key: "%", class: "options" },
    { key: "/", class: "operators" },
    { key: "7", class: "numbers" },
    { key: "8", class: "numbers" },
    { key: "9", class: "numbers" },
    { key: "*", class: "operators" },
    { key: "4", class: "numbers" },
    { key: "5", class: "numbers" },
    { key: "6", class: "numbers" },
    { key: "-", class: "operators" },
    { key: "1", class: "numbers" },
    { key: "2", class: "numbers" },
    { key: "3", class: "numbers" },
    { key: "+", class: "operators" },
    { key: "0", class: "numbers", id: "zero" },
    { key: ".", class: "numbers" },
    { key: "=", class: "operators", id: "equal" }
  ]
  return (
    buttons.map((button) => (
      <button onClick={() => updateDisplay(data, setData, button.key)} key={button.key} id={button.id} className={button.class}>{button.key}</button>
    ))
  )
}
