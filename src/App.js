import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    // для всего сайта создала общий div,
    // в котором будут лежать все декомпозированные компоненты
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
