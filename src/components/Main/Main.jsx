// пишется всегда
import React, { Component } from 'react';
// import React from 'react';
// import asia from './img/asia.jpg'

// подключаем css стили
// s - это название объекта стилей, который содержит в себе свойства/классы и их значения
// это нужно, чтобы не было возможности попасть на дубли в коде
// это обеспечивается благодаря надстройке module.css вместо просто css
// значением класса/свойства является уникальный айдишник, который присваивается каждому элементу,
// которому был присвоен класс
import s from './Main.module.css';

// Header - это компонента/функция, которая возвращает html разметку
// const Main = () => {
class Main extends Component {

    constructor() {

        super();

        this.state = {
            idea: ' ',
        };

        this.pushNewIdea = this.pushNewIdea.bind(this);
    }

    pushNewIdea() {
        const newIdea = this.state.idea;
        this.props.onAddIdeaToState(newIdea);
        this.setState({ idea: null });
    };

    pushNewIdeaByButton(event) {
        if (this.state.idea) {
            this.pushNewIdea();
        }
    };

    crollPageToTheBottom() {
        window.scrollTo(0, window.outerHeight);
    };

    render() {
        return (
            // s.header - это объект s с классом header, который я сама придумала
            // и задала стили этому классу в css документе
            // вместо слова header может быть любое другое слово
            // можно задать и обычный класс: className='headerDiv'
            // но module.css позволяет упростить процесс постоянного придумывания классов
            // и отслеживание отсутствия дублей
            <div className={s.main}>
                {/* две точки значат, что я вышла из папки и зашла в папку img
                если у меня html находится в той же папке, что и папка img
                то выходить из неё не нужно и достаточно одной точки,
                чтобы зайти в папку img */}
                <div className={s.main__inside}>
                    <div className={s.text__inside}>
                        <div className={s.title}>
                            <h3>#IDEA MACHINE</h3>
                        </div>
                        <div className={s.text}>
                            <p>A live crowd-sourced collection of ideas for new apps & business ideas that have been requested by the internet.
                            Sorted by Hot, Top and New. With upvotes and downvotes. To post your own idea use the hashtag
                                #ideaMachine or click the "submit a new idea" button below.</p>
                        </div>
                    </div>
                    <div className={s.main__buttons}>
                        <div className={s.buttonView}>
                            <button>VIEW IDEAS</button>
                        </div>
                        <div>
                            <button onClick={this.pushNewIdeaByButton.bind(this)}>SUBMIT A NEW IDEA</button>
                        </div>
                    </div>
                    <div className={s.scrollSpan}>
                        <button onClick={this.crollPageToTheBottom.bind(this)}>Scroll down to view all ideas</button>
                    </div>
                </div>

                {/* {this.props.ideas.map((item) => {
                    return (
                        <div className='createIdeas'>
                            <div className='ideaColor'>
                                It's your IDEA
                            </div>
                            <div class='idea'><div>{item}</div></div>
                        </div>
                    )
                })} */}
            </div>
        );
    }
}

// обязательно делаю экспорт функции, чтобы её можно было импортировать в любом файле проекта
export default Main;