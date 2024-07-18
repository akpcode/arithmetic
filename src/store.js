import { createStore } from 'redux';

const initialState = {
    displayValue: '0',
    currentValue: '',
    operator: null,
    waitingForOperand: false,
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLEAR':
            return initialState;
        case 'INPUT_DIGIT':
            if (state.waitingForOperand) {
                return {
                    ...state,
                    displayValue: action.digit,
                    waitingForOperand: false,
                };
            }
            if (state.displayValue === '0') {
                return {
                    ...state,
                    displayValue: action.digit,
                };
            }
            return {
                ...state,
                displayValue: state.displayValue + action.digit,
            };
        case 'INPUT_DECIMAL':
            if (state.waitingForOperand) {
                return {
                    ...state,
                    displayValue: '0.',
                    waitingForOperand: false,
                };
            }
            if (!state.displayValue.includes('.')) {
                return {
                    ...state,
                    displayValue: state.displayValue + '.',
                };
            }
            return state;
        case 'PERFORM_OPERATION':
            const { displayValue, operator, currentValue } = state;
            const inputValue = parseFloat(displayValue);

            if (currentValue === '' && operator === null) {
                return {
                    ...state,
                    currentValue: inputValue,
                    operator: action.operator,
                    waitingForOperand: true,
                };
            }

            const newValue = calculate(currentValue, inputValue, operator);

            return {
                ...state,
                displayValue: String(newValue),
                currentValue: newValue,
                operator: action.operator,
                waitingForOperand: true,
            };
        case 'EVALUATE':
            const result = calculate(state.currentValue, parseFloat(state.displayValue), state.operator);
            return {
                ...state,
                displayValue: String(result),
                currentValue: '',
                operator: null,
                waitingForOperand: true,
            };
        default:
            return state;
    }
};

const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
};

const store = createStore(calculatorReducer);

export default store;
