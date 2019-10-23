import React from 'react';
import s from './IdeaCreator.module.css';

const IdeaCreator = () => {
    return (
        <div className='createIdeasBlock'>
            {/* {this.state.ideas.map((item) => {
                return <Submit />
            })} */}
            {/* добавила обработчик события на клик по кнопке */}
            <div className='clickButton'>
                <button onClick={this.createNewIdeaByButton.bind(this)}>Submit new Idea</button>
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
                    {this.state.ideas.map((item) => {
                        return (
                            <div className='createIdeasBlock'>
                                <div className='clickButton'>
                                    <button onClick={this.createNewIdeaByButton.bind(this)}>Submit new Idea</button>
                                </div>
                                <div className='ideaState'>
                                    Write your IDEA
                                </div>
                                <input value={this.state.comment} onChange={this.changeInputText} onKeyPress={this.createNewIdeaByEnter.bind(this)}></input>
                                <div class='idea'>{item}</div>
                            </div>
                        )
                    })}
                    {/* если указать просто value={this.state.comment}, 
                        то инпут становится readonly, то есть неизменяемым.
                        Чтобы можно было в инпуте писать другие значения
                        создала метод: changeInputText */}
                    {/* то есть если происходит изменение в input 
                        и срабатывает onChange: onChange={this.changeInputText}
                        то запускается метод: changeInputText, в который передаём значение: event, 
                        которое пользователь ввёл в input */}
                    {/* в этот же input навешиваю обработчик на событие Enter */}
                    <input value={this.state.comment} onChange={this.changeInputText} onKeyPress={this.createNewIdeaByEnter.bind(this)}></input>
                </div>
            </div>
            <div className='countIdeas'>
                <span>Total comments: {this.state.count}</span>
            </div>
        </div >
    )
}

export default IdeaCreator;


