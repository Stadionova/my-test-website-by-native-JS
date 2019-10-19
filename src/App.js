import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    // для всего сайта создала общий div,
    // в котором будут лежать все декомпозированные компоненты
    <div className="grid__App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
