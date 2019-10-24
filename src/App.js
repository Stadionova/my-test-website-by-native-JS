// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ideas from './components/Ideas/Ideas';
// import { BrowserRouter, Route } from 'react-router-dom';

// function App() {
class App extends Component {
  constructor() {

    super();

    this.state = {
      ideas: ['hello']
    };

    this.addIdeaToState = this.addIdeaToState.bind(this);

  }

  addIdeaToState(idea) {
    const newIdea = this.state.ideas;
    newIdea.push(idea);
    this.setState({ ideas: newIdea })
  }

  render() {
    return (
      <div className='container'>
        <div className="grid__App">
          <Header />
          <Main />
          {/* в пропс Ideas передаю ideas, в котором лежит массив с идеями */}
          <Ideas ideas={this.state.ideas} onAddIdeaToState={this.addIdeaToState} />
        </div>
      </div>
    );
  }
}

export default App;
