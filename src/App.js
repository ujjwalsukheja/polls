import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {

  useEffect(()=>{
    var formdata = new FormData();
    formdata.append("option", "option_2");

    var requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      body: formdata
    };

    fetch("https://risingpoll.com/manage/response/116434113f2a151", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }) 

  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
  )
}


export default App;
