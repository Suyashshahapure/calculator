import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    if (result === 'Error') {
      // If there was an error previously, clear the result
      setResult('');
    }
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = eval(input);
      if (isNaN(evaluatedResult)) {
        setResult('NaN');
      } else {
        setResult(evaluatedResult);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
      <h1>React Calculator</h1>

      <input type="text" value={input} readOnly style={{ marginBottom: '10px', width: '240px', height: '40px', textAlign: 'right' }} />
      <div> <p> {result}</p></div>
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => handleInput('7')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>7</button>
          <button onClick={() => handleInput('8')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>8</button>
          <button onClick={() => handleInput('9')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>9</button>
          <button onClick={() => handleInput('+')} style={{ borderRadius: '5px', width: '60px', height: '60px' }}>+</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => handleInput('4')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>4</button>
          <button onClick={() => handleInput('5')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>5</button>
          <button onClick={() => handleInput('6')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>6</button>
          <button onClick={() => handleInput('-')} style={{ borderRadius: '5px', width: '60px', height: '60px' }}>-</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => handleInput('1')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>1</button>
          <button onClick={() => handleInput('2')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>2</button>
          <button onClick={() => handleInput('3')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>3</button>
          <button onClick={() => handleInput('*')} style={{ borderRadius: '5px', width: '60px', height: '60px' }}>*</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={clearInput} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>C</button>
          <button onClick={() => handleInput('0')} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>0</button>
          <button onClick={calculateResult} style={{ marginRight: '10px', borderRadius: '5px', width: '60px', height: '60px' }}>=</button>
          <button onClick={() => handleInput('/')} style={{ borderRadius: '5px', width: '60px', height: '60px' }}>/</button>
        </div>
      </div>

    </div>
  );
}

export default Calculator;
