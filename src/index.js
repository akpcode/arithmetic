import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import Calculator from './components/calculator';


ReactDOM.render(
    <Provider store={store}>
      <Calculator />
    </Provider>,
    document.getElementById('root')
);
