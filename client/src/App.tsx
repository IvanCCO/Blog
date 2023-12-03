import React from 'react';
import logo from './logo.svg';
import { formatDate } from './utils/formatDate';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-red-700'>
          Edit <code>src/App.tsx</code> and save to reload. {formatDate("21-29-2029-13:00:00")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
