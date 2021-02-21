import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {add,sub,mul,div} from './Calc';

ReactDOM.render(
  <>
  <h1>the sum of two numbers {add(4,8)}</h1>
  <h1>the sub of two numbers {sub(4,8)}</h1>
  <h1>the mul of two numbers {mul(4,8)}</h1>
  <h1>the div of two numbers {div(4,8)}</h1>

  </>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

