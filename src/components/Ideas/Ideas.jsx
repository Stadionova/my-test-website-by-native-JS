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
            comment: ' ',
            data: '22.10.2019',
            count: 0
        };
        // например компонента обладает идеей со значением: first idea
        // делается это для того, чтобы использовать этот стэйт где-либо по коду и не инлайнить значения вручную
        // использую этот стэйт ниже в методе render
        // state пишем в фигурных скобках, если используем в jsx

        // привязала контекст стэйта
        // так как контекст теряется в методе createNewTask
        // то есть без привязки контекста объекта state метод createNewTask не увидит содержимое объекта state
        // так как в методе данных свойств comment & data нет
        // чтобы эти бинды не писать здесь, их можно пистаь напрямую в jsx
        // оставлю один бинд здесь, второй перенесу инлайн в jsx
        // this.createNewTask = this.createNewTask.bind(this);
        this.changeInputText = this.changeInputText.bind(this);
    }

    // метод createNewTask, который создаёт новые таски
    // навешала клик на кнопку
    createNewTask() {
        // alert('hi');
        this.setState({ idea: this.state.comment });
        this.setState({ comment: ' ' });
        if (this.state.count >= 0 && this.state.comment != ' ') {
            this.state.count += 1;
        }
        // контекст забиндила выше, поэтому у данного метода доступ к объекту есть
        // alert(this.state.comment + ' hello ' + this.state.data);
        // меняю свойство в state
        // вот так менять сам объект state нельзя
        // this.state.idea = this.state.comment + ' ' + this.state.data;
        // нужно это делать через специальный метод setState
        // this.setState({ idea: this.state.comment });
    };

    // все методы обязательно нужно забиндить в конструкторе
    // принимает значение пользователя: event и присваивает его в свойство в state
    changeInputText(event) {
        this.setState({ comment: event.currentTarget.value });
        this.setState({ idea: this.state.comment });
    };

    countIdeas(event) {
        this.setState({ comment: event.currentTarget.value });
        this.setState({ idea: this.state.comment });
    };

    // метод render
    render() {
        return (
            // добавила обработчик события на клик по кнопке
            <div className='createCommentsBlock'>
                <div className='clickButton'>
                    <button onClick={this.createNewTask.bind(this)}>Submit new Idea</button>
                </div>
                <div className='ideaState'>
                    {/* достаю значение из state  */}
                    Idea: <span>{this.state.comment}</span>
                    <div className='comments'>
                        {/* если указать просто value={this.state.comment}, 
                        то инпут становится readonly, то есть неизменяемым
                        чтобы можно было в инпуте писать другие значения
                        нужно создать методы и указать в джаваскриптовом событии onchange */}
                        {/* то есть если происходит изменение и срабатывает onChange
                        то запускается метод: changeInputText, в который передаём значение: event, 
                        которое пользователь ввёл в input */}
                        <input value={this.state.comment} onChange={this.changeInputText}></input>
                        {/* <span>{this.state.data}</span> */}
                    </div>
                </div>
                <div className='countComments'>
                    <span>Total comments: {this.state.count}</span>
                </div>
            </div>
        );
    }
}

export default Ideas;