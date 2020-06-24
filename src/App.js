// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/Main/Main';
import Ideas from './components/Ideas/Ideas';
import Competition from './components/Competition/Competition';
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
        const twoObj = articles[1];

        return ( 
            <div className = 'container'>
                <div className = "grid__App"> 
                    <Header article = { article }/> 
                    <Main ideas = { this.state.ideas }
                    onAddIdeaToState = { this.addIdeaToState }/>  
                    <Ideas ideas = { this.state.ideas }
                    onAddIdeaToState = { this.addIdeaToState }/> 
                    <Competition objProps = { twoObj }/> 
                </div> 
            </div>
        );
    }
}

export default App;