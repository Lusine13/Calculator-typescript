import React, { useState } from 'react';
import './Calculator.css'

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  
  const handleButtonClick = (value: string) => {
    setInput(prev => prev + value);
  };

  
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

    const handleBack = () => {
    setInput(prev => prev.slice(0, -1));  };


  const handleEvaluate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">          
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('0')}>0</button>         
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBack}>←</button>
          <button onClick={handleEvaluate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
