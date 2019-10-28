// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ideas from './components/Ideas/Ideas';
// импортирую объект articles
import { articles } from './components/fixture';
// import { BrowserRouter, Route } from 'react-router-dom';

// function App() {
class App extends Component {
  constructor() {

    super();

    this.state = {
      ideas: []
    };

    this.addIdeaToState = this.addIdeaToState.bind(this);

  }

  // общий метод добавления идеи
  addIdeaToState(idea) {
    // создаю переменную, в которую кладу массив с идеями из стэйта
    const newIdea = this.state.ideas;
    // пушу в этот массив новую переданную идею
    newIdea.push(idea);
    // кладу новый массив с новой идеей обратно в стэйт вместо предыдущего массива
    this.setState({ ideas: newIdea })
  }

  render() {
    // у меня в articles лежит массив объектов, достаю его первый элемент по индексу 0
    // и кладу первый элемент массива в переменную article
    const article = articles[0];
    return (
      <div className='container'>
        <div className="grid__App">
          {/* передаю в пропсы компоненты Header атрибут article, в который кладу переменную article */}
          <Header article={article} />
          <Main ideas={this.state.ideas} onAddIdeaToState={this.addIdeaToState} />
          {/* в пропс компоненты Ideas передаю пропс ideas, в котором лежит массив с идеями, название пропсам даю любое */}
          {/* так же передаю в пропс общий метод */}
          <Ideas ideas={this.state.ideas} onAddIdeaToState={this.addIdeaToState} />
        </div>
      </div>
    );
  }
}

export default App;
