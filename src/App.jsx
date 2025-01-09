import React, { useState } from 'react';

    function App() {
      const [display, setDisplay] = useState('0');
      const [firstOperand, setFirstOperand] = useState(null);
      const [operator, setOperator] = useState(null);

      const handleDigit = (digit) => {
        setDisplay(display === '0' ? String(digit) : display + digit);
      };

      const handleOperator = (op) => {
        setOperator(op);
        setFirstOperand(parseFloat(display));
        setDisplay('0');
      };

      const handleEqual = () => {
        if (operator && firstOperand !== null) {
          const secondOperand = parseFloat(display);
          let result;
          switch (operator) {
            case '+':
              result = firstOperand + secondOperand;
              break;
            case '-':
              result = firstOperand - secondOperand;
              break;
            case '*':
              result = firstOperand * secondOperand;
              break;
            case '/':
              result = firstOperand / secondOperand;
              break;
            default:
              return;
          }
          setDisplay(String(result));
          setFirstOperand(null);
          setOperator(null);
        }
      };

      const handleClear = () => {
        setDisplay('0');
        setFirstOperand(null);
        setOperator(null);
      };

      const handleDecimal = () => {
        if (!display.includes('.')) {
          setDisplay(display + '.');
        }
      };

      return (
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button onClick={() => handleClear()}>C</button>
            <button className="operator" onClick={() => handleOperator('/')}>/</button>
            <button className="operator" onClick={() => handleOperator('*')}>*</button>
            <button onClick={() => handleDigit(7)}>7</button>
            <button onClick={() => handleDigit(8)}>8</button>
            <button onClick={() => handleDigit(9)}>9</button>
            <button className="operator" onClick={() => handleOperator('-')}>-</button>
            <button onClick={() => handleDigit(4)}>4</button>
            <button onClick={() => handleDigit(5)}>5</button>
            <button onClick={() => handleDigit(6)}>6</button>
            <button className="operator" onClick={() => handleOperator('+')}>+</button>
            <button onClick={() => handleDigit(1)}>1</button>
            <button onClick={() => handleDigit(2)}>2</button>
            <button onClick={() => handleDigit(3)}>3</button>
            <button className="equal" onClick={() => handleEqual()}>=</button>
            <button onClick={() => handleDigit(0)}>0</button>
            <button onClick={() => handleDecimal()}>.</button>
          </div>
        </div>
      );
    }

    export default App;
