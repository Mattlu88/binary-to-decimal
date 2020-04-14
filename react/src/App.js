import React, { useState, useEffect } from 'react';
import './App.css';

const Info = (props) => {
  return (
    <div className="info" >
      <p>{props.info}</p>
    </div>
  )
}

const validBinary = (e) => {
  const reg = /[^01]/
  return (!reg.test(e)) ? true : false
}

const toDecimal = (e) => {
  if (e.length === 0) {
    return ''
  }

  let result = 0;
  for (let i = 0; i <= e.length; i++) {
    const n = e.charAt(i)
    result += n * Math.pow(2, e.length - (i + 1))
  }
  return result
}

function App() {
  const initConverter = {
    binary: '',
    decimal: '',
    info: '',
  }
  const [converter, setConverter] = useState(initConverter)

  const handleChange = (event) => {
    const binary = event.target.value
    if (!validBinary(binary)) {
      const info = `${binary} is not a valid binary number`
      setConverter({
        binary,
        decimal: '' ,
        info,
      })
      return
    }
    const decimal = toDecimal(binary)
    setConverter({
      binary,
      decimal,
      info: '',
    })
  }

  return (
    <div className="App">
      <div className="App-header">
        <label>Enter a binary number </label>
        <input className="binary-input"
          type="text" 
          value={converter.binary}
          onChange={handleChange}
          autoFocus>
        </input>
        <Info 
          info={converter.info}
        />
        <label>Converted decimal </label>
        <input className="decimal-display"
          type="text" 
          value={converter.decimal}
          readOnly
        >
        </input>
      </div>
    </div>
  );
}

export default App;
