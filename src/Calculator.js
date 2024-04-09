/* eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <input type="text" value={input} readOnly />
      <br />
      <div className="button-row">
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="+">+</button>
      </div>
      <div className="button-row">
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="-">-</button>
      </div>
      <div className="button-row">
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="*">*</button>
      </div>
      <div className="button-row">
        <button onClick={handleInput} value="0">0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={handleInput} value="/">/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
