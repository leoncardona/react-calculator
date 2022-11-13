import React, { useEffect, useState } from 'react'
import ButtonGrid from './components/ButtonGrid';
import Display from './components/Display';
import './App.css'
import HandleKey from './keyHandler';

function App() {
  const [data, setData] = useState([
    { number: "0", lastNumber: null, currentOperation: null, isOperating: false }
  ])
  useEffect(() => {
    document.addEventListener('keydown', (e) => HandleKey(e, data, setData), true)
  }, [data])
  return (
    <div className="calculator">
      <Display data={data} />
      <ButtonGrid data={data} setData={setData} />
    </div>
  )
}

export default App;