import React, { useState, useEffect } from 'react';
import './App.css';

const Info = (props) => {
  console.log(props)
  const { message, type } = props
  const style = type === "error" ? "info red" : "info"
  return (
    <div className={style} >
      <p>{message}</p>
    </div>
  )
}
const convToDec = (e) => {
  if (e.length === 0) {
    return {}
  }

  if (!validBinary(e)) {
    const message = `${e} is not a valid binary number`
    const type = 'error'
    return { message, type }
  }

  const  message = `The binary number ${e} is converted to decimal number ${toDecimal(e)}`
  const type = 'info'
  return { message, type }

}

const validBinary = (e) => {
  const reg = /[^01]/
  return (!reg.test(e)) ? true : false
}

const toDecimal = (e) => {
  let result = 0;
  for (let i = 0; i <= e.length; i++) {
    const n = e.charAt(i)
    result += n * Math.pow(2, e.length - (i + 1))
  }
  return result
}

function App() {
  const [binary, setBinary] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    const result = convToDec(binary)
    setInfo(result)
  }, [binary])

  const handleChange = (event) => {
    setBinary(event.target.value)
  }

  return (
    <div className="App">
      <div className="App-header">
        <label>Enter a binary number </label>
        <input className="binary-input"
          type="text" 
          value={binary}
          onChange={handleChange}
          autoFocus>
        </input>
        <Info 
          message={info.message}
          type={info.type}
        />
      </div>
    </div>
  );
}

export default App;
