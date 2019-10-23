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
        // то есть, наша компонента обладает каким-то внешним видом, поведением 
        // и состоянием: state (то есть обладает значением каких-то полей)
        this.state = {
            ideaNum: 'first idea',
            comment: ' ',
            count: 0,
            ideas: []
        };
        // например компонента обладает идеей: ideaNum со значением: first idea
        // делается это для того, чтобы использовать этот стэйт где-либо по коду и не инлайнить значения вручную
        // использую этот стэйт ниже в методе render
        // state пишем в фигурных скобках, если используем в jsx
        // и пишем без фигурных скобок в js коде

        // привязала контекст стэйта
        // так как контекст теряется в методе createNewIdea и других методах
        // то есть без привязки контекста объекта state метод createNewIdea не увидит содержимое объекта state
        // так как в методе данных свойств comment & count нет
        // чтобы эти бинды не писать здесь, их можно писать напрямую в jsx
        // оставлю некоторые бинды здесь, остальные перенесу инлайн в jsx
        this.changeInputText = this.changeInputText.bind(this);
        this.createNewIdea = this.createNewIdea.bind(this);
    }

    // общий метод createNewIdea создаёт новые идеи 
    // при клике на кнопку Submit new Idea и при нажатии клавиши Enter в input 
    createNewIdea() {
        // пушим в проперти ideas новую идею, которая лежит в comment
        // а в comment я положила то, что лежит в input с помощью метода: changeInputText
        const newIdea = this.state.ideas;
        newIdea.push(this.state.comment);
        // а потом в ideas кладём этот новый массив с новой идеей
        this.setState({ ideas: newIdea })
        // затем обнуляю содержимое input
        this.setState({ comment: ' ' });
        // и увеличиваю счётчик идей после того, как содержимое input было удалено
        if (this.state.count >= 0 && this.state.comment != ' ') {
            this.state.count += 1;
        }
        // вот так менять объект state нельзя
        // this.state.idea = this.state.comment + this.state.data;
        // нужно это делать через специальный метод setState
        // this.setState({ idea: this.state.comment });
    };

    createNewIdeaByButton(event) {
        this.createNewIdea();
    };

    createNewIdeaByEnter(event) {
        // если событием является нажатие на Enter, то
        // вызываем общий метод createNewIdea и для button, и для input
        if (event.key === 'Enter') {
            this.createNewIdea();
        }
    };

    // все методы обязательно нужно забиндить в конструкторе
    // принимает значение пользователя: event и присваивает его в свойство в state
    changeInputText(event) {
        this.setState({ comment: event.currentTarget.value });
        this.setState({ ideaNum: this.state.comment });
    };

    countIdeas(event) {
        this.setState({ comment: event.currentTarget.value });
        this.setState({ ideaNum: this.state.comment });
    };

    // метод render
    render() {
        return (
            // добавила обработчик события на клик по кнопке
            <div className='createIdeasBlock'>
                <div className='clickButton'>
                    <button onClick={this.createNewIdeaByButton.bind(this)}>Submit new Idea</button>
                </div>
                <div className='ideaState'>
                    {/* достаю значение из state  */}
                    Idea: <span>{this.state.comment}</span>
                    <div className='ideas'>
                        {/* создала отдельный div для каждой отдельной идеи */}
                        {/* где функция map пробегается по массиву и возвращает div */}
                        {/* каждый элемент мэпа будет item */}
                        {/* для каждого item вызову стрелочную функцию ниже и верну div */}
                        {/* map меняет один элемент на другой */}
                        {this.state.ideas.map((item) => {
                            return <div class='idea'>{item}</div>
                        })}
                        {/* если указать просто value={this.state.comment}, 
                        то инпут становится readonly, то есть неизменяемым
                        чтобы можно было в инпуте писать другие значения
                        нужно создать методы и указать в джаваскриптовом событии onchange */}
                        {/* то есть если происходит изменение и срабатывает onChange: onChange={this.changeInputText}
                        то запускается метод: changeInputText, в который передаём значение: event, 
                        которое пользователь ввёл в input */}
                        {/* навешиваю обработчик на событие Enter */}
                        <input value={this.state.comment} onChange={this.changeInputText} onKeyPress={this.createNewIdeaByEnter.bind(this)}></input>
                        {/* <span>{this.state.data}</span> */}
                    </div>
                </div>
                <div className='countIdeas'>
                    <span>Total comments: {this.state.count}</span>
                </div>
            </div >
        );
    }
}

export default Ideas;