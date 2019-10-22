import React, { Component } from 'react';
import './Ideas.css';

// класс Ideas наследует от Component
class Ideas extends Component {

    constructor() {

        super();

        this.state = {

        };
    }

    // метод createNewTask, который создаёт новые таски
    // навешала клик на кнопку
    createNewTask() {
        alert('hi');
    }

    // метод render
    render() {
        return (
            // добавила обработчик события на клик по кнопке
            <div className='clickButton'>
                <button onClick={this.createNewTask}>Submit new Idea</button>
            </div>
        );
    }
}

export default Ideas;