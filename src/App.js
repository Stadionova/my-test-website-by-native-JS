import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Hot from './components/Hot/Hot';
// import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <div className='container'>
      <div className="grid__App">
        <Header />
        <Main />
        {/* <Hot /> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
