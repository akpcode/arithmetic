import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Calculator = () => {
    const displayValue = useSelector((state) => state.displayValue);
    const dispatch = useDispatch();

    const handleDigit = (digit) => {
        dispatch({ type: 'INPUT_DIGIT', digit });
    };

    const handleOperation = (operator) => {
        dispatch({ type: 'PERFORM_OPERATION', operator });
    };

    const handleDecimal = () => {
        dispatch({ type: 'INPUT_DECIMAL' });
    };

    const handleClear = () => {
        dispatch({ type: 'CLEAR' });
    };

    const handleEvaluate = () => {
        dispatch({ type: 'EVALUATE' });
    };

    return (
        <div className="calculator">
            <div id="display" className="calculator-display">
                {displayValue}
            </div>
            <button id="one" onClick={() => handleDigit('1')}>1</button>
            <button id="two" onClick={() => handleDigit('2')}>2</button>
            <button id="three" onClick={() => handleDigit('3')}>3</button>
            <button id="clear" onClick={handleClear}>AC</button>
            <button id="four" onClick={() => handleDigit('4')}>4</button>
            <button id="five" onClick={() => handleDigit('5')}>5</button>
            <button id="six" onClick={() => handleDigit('6')}>6</button>
            <button id="divide" onClick={() => handleOperation('/')}>/</button>
            <button id="seven" onClick={() => handleDigit('7')}>7</button>
            <button id="eight" onClick={() => handleDigit('8')}>8</button>
            <button id="nine" onClick={() => handleDigit('9')}>9</button>
            <button id="multiply" onClick={() => handleOperation('*')}>*</button>
            <button id="zero" onClick={() => handleDigit('0')}>0</button>
            <button id="decimal" onClick={handleDecimal}>.</button>
            <button id="subtract" onClick={() => handleOperation('-')}>-</button>
            <button id="add" onClick={() => handleOperation('+')}>+</button>
            <button id="equals" onClick={handleEvaluate}>=</button>
            
        </div>
    );
};

export default Calculator;
