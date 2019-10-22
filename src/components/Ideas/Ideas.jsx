import React, { Component } from 'react';
import './Ideas.css';

// класс Ideas наследует от Component
class Ideas extends Component {

    // создаём конструктор, который обязательно должен наследовать от Component
    // этот constructor должен внутри себя вызвать конструктор супер-класса/конструктора-родителя Component, от которого он наследовался
    // наследует он при помощи метода super
    constructor() {

        super(); // это вызов родителя

        // дальше объявлеям свойство state
        // то есть, наша компонента обладает каким-то внешним видом, поведением и состоянием: state (то есть обладает значением каких-то полей)
        this.state = {
            idea: 'first idea',
            comment: 'hi',
            data: '22.10.2019'
        };
        // например компонента обладает идеей со значением: first idea
        // делается это для того, чтобы использовать этот стэйт где-либо по коду и не инлайнить значения вручную
        // использую этот стэйт ниже в методе render
        // state пишем в фигурных скобках, если используем в jsx

        // привязала контекст стэйта
        // так как контекст теряется в методе createNewTask
        // то есть без привязки контекста объекта state метод createNewTask не увидит содержимое объекта state
        // так как в методе данных свойств comment & data нет
        this.createNewTask = this.createNewTask.bind(this);
    }

    // метод createNewTask, который создаёт новые таски
    // навешала клик на кнопку
    createNewTask() {
        alert('hi');
        // контекст забиндила выше, поэтому у данного метода доступ к объекту есть
        alert(this.state.comment + ' hello ' + this.state.data);
        // меняю свойство в state
        // вот так менять сам объект state нельзя
        // this.state.idea = this.state.comment + ' ' + this.state.data;
        // нужно это делать через специальный метод setState
        this.setState({ idea: this.state.comment + ' ' + this.state.data });
    };

    // метод render
    render() {
        return (
            // добавила обработчик события на клик по кнопке
            <div className='createCommentsBlock'>
                <div className='clickButton'>
                    <button onClick={this.createNewTask}>Submit new Idea</button>
                </div>
                <div className='ideaState'>
                    {/* достаю значение из state  */}
                    Idea: <span>{this.state.idea}</span>
                    <div className='comments'>
                        <input value={this.state.comment}></input>
                        <span>{this.state.data}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ideas;