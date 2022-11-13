import React, { useState} from 'react'
import ButtonGrid from './components/ButtonGrid';
import Display from './components/Display';
import { modifyData } from './components/logic';
import './App.css'

function App() {
  const [data, setData] = useState([
    { number: "0", lastNumber: null, currentOperation: null, isOperating: false }
  ])
  function updateDisplay(key) {
    const newData = [...data]
    modifyData(newData, key)
    setData([...newData])
  }
  return (
    <div className="calculator">
      <Display data={data} />
      <ButtonGrid updateDisplay={updateDisplay} />
    </div>
  )
}

export default App;