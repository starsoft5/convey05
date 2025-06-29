import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  const callFunction = async () => {
    try {
      const response = await fetch('http://localhost:7112/api/SimpleHelloFunction');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add Azure Function <code>src/App.tsx !!!</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={callFunction} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Call Azure Function
        </button>
        {message && <p style={{ marginTop: '20px' }}>{message}</p>}
      </header>
    </div>
  );
}

export default App;
