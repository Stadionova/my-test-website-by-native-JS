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

        // в данной компоненте есть свой пропс, который нужен только здесь
        // записываю сюда каждую новую идею и сразу после добавления в общий стэйт идей удаляю текущую идею
        this.state = {
            idea: ' ',
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
        this.pushNewIdea = this.pushNewIdea.bind(this);
    }

    // общий метод createNewIdea создаёт новые идеи 
    // при клике на кнопку: Submit new Idea и при нажатии клавиши: Enter в input 
    pushNewIdea() {
        // пушим в проперти ideas новую идею, которая лежит в comment
        // а в comment я положила то, что лежит в input с помощью метода: changeInputText
        // const newIdea = this.state.ideas;
        // newIdea.push(this.state.comment);
        const newIdea = this.state.idea;
        // вызываю их пропсов общую функцию и передаю в неё новую идею, которую записываю в общий стэйт в App.js
        this.props.onAddIdeaToState(newIdea);
        // обнуляю инпут с написанной идеей
        this.setState({ idea: ' ' });
        // а потом в ideas кладём этот новый массив с новой идеей
        // this.setState({ ideas: newIdea })
        // затем обнуляю содержимое input
        // this.setState({ comment: ' ' });
        // и увеличиваю счётчик идей после того, как содержимое input было удалено
        // if (this.state.count >= 0 && this.state.comment != ' ') {
        //     this.state.count += 1;
        // }
        // вот так менять объект state нельзя
        // this.state.idea = this.state.comment + this.state.data;
        // нужно это делать через специальный метод setState
        // this.setState({ idea: this.state.comment });
    };

    // данный метод вызывает метод pushNewIdea при клике на кнопку: Submit new Idea
    // для каждого события пришлось создать свой собственный метод,
    // потому что у input есть event Enter,
    // а у клика по кнопке такого event нет
    // если инпут пустой, кнопка не работает
    pushNewIdeaByButton(event) {
        if (this.state.idea != ' ') {
            this.pushNewIdea();
        }
    };

    // данный метод вызывает метод pushNewIdea при нажатии клавиши Enter, находясь в input
    pushNewIdeaByEnter(event) {
        // если событием является нажатие на Enter, то
        // вызываем общий и для button, и для input метод pushNewIdea 
        if (event.key === 'Enter') {
            this.pushNewIdea();
        }
    };

    // все методы обязательно нужно забиндить в конструкторе или инлайн в jsx
    // данный метод принимает значение пользователя: event и присваивает его в свойство локального state: idea
    // данный метод срабатывает в момент, когда в инпут было что-то введено
    changeInputText(event) {
        this.setState({ idea: event.currentTarget.value });
        /* закомментила, потому что изначально хотела дублировать написанную идею справа от заголовка: Write your IDEA */
        // this.setState({ ideaNum: this.state.comment });
    };

    // метод render возвращает html страничку (отрендерить - значит "отрисовать")
    render() {
        return (
            <div className='createIdeasBlock'>
                {/* {this.state.ideas.map((item) => {
                return <Submit />
            })} */}
                {/* добавила обработчик события на клик по кнопке */}
                <div className='clickButton'>
                    <button onClick={this.pushNewIdeaByButton.bind(this)}>Submit new Idea</button>
                </div>
                <div className='ideaState'>
                    Write your IDEA
                    {/* закомментила span, потому что изначально хотела дублировать написанную идею справа от заголовка: Write your IDEA */}
                    {/* <span>{this.state.comment}</span> */}
                    <div className='ideas'>
                        {/* функция map пробегается по массиву, который лежит в стэйт свойстве: ideas,
                         и возвращает div для каждой отдельной идеи */}
                        {/* каждый элемент мэпа будет называться item */}
                        {/* для каждого item вызываю стрелочную функцию, которая возвращает div */}
                        {/* map меняет один элемент на другой */}
                        {/* то есть меняю item на div */}
                        {/* достаю значение из state: this.state.ideas */}
                        {/* {this.state.ideas.map((item) => {
                            return (<div class='idea'>{item}</div>)
                        })} */}
                        {/* если указать просто value={this.state.comment}, 
                        то инпут становится readonly, то есть неизменяемым.
                        Чтобы можно было в инпуте писать другие значения
                        создала метод: changeInputText */}
                        {/* то есть если происходит изменение в input 
                        и срабатывает onChange: onChange={this.changeInputText}
                        то запускается метод: changeInputText, в который передаём значение: event, 
                        которое пользователь ввёл в input */}
                        {/* в этот же input навешиваю обработчик на событие Enter */}
                        {/* в value кладу идею */}
                        <input value={this.state.idea} onChange={this.changeInputText} onKeyPress={this.pushNewIdeaByEnter.bind(this)}></input>
                    </div>
                </div>
                {/* <div className='countIdeas'>
                    <span>Total IDEAS: {this.state.count}</span>
                </div> */}

                {/* здесь происходит отрисовка новых идей при клике на кнопку */}
                {/* пробегаюсь по массиву идей, который беру из переданных пропсов */}
                {this.props.ideas.map((item) => {
                    return (
                        <div className='createIdeas'>
                            {/* <div className='clickButton'>
                                <button onClick={this.createNewIdeaByButton.bind(this)}>Submit new Idea</button>
                            </div> */}
                            <div className='ideaColor'>
                                It's your IDEA
                                </div>
                            {/* <input value={this.state.comment} onChange={this.changeInputText} onKeyPress={this.createNewIdeaByEnter.bind(this)}></input> */}
                            <div class='idea'><div>{item}</div></div>
                        </div>
                    )
                })}
            </div >
        );
    }
}

export default Ideas;