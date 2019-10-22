import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ideas from './components/Ideas/Ideas';
// import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <div className='container'>
      <div className="grid__App">
        <Header />
        <Main />
        <Ideas />
        {/* <Hot /> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
