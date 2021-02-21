import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Cards';
import sdata from './Sdata';

console.log(sdata[0]);



ReactDOM.render(
 <> 
 
  <Card 
  imgsrc={sdata[0].imgsrc}
  title={sdata[0].title}
  sname={sdata[0].sname}
  link={sdata[0].link}
  />,
  <Card
   imgsrc={sdata[1].imgsrc}
   title={sdata[1].title}
   sname={sdata[1].sname}
   link={sdata[1].link}

  />
  <Card
   imgsrc={sdata[2].imgsrc}
   title={sdata[2].title}
   sname={sdata[2].sname}
   link={sdata[2].link}
   
  />
 
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

