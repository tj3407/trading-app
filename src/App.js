import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = async (event) => {
    let message = { message: "hello" };

    await fetch("http://localhost:9000/api/click", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
