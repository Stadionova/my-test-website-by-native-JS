// пишется всегда
import React from 'react';
// import flower from './img/flower_orig.jpg'
import Competition from '../Competition/Competition';
import Top from '../Top/Top';
import Hot from '../Hot/Hot';
import New from '../New/New';
import Search from '../Search/Search';
import Login from '../Login/Login';
import Submit from '../Submit/Submit';
import Follow from '../Follow/Follow';

// подключаем css стили
// s - это название объекта стилей, который содержит в себе свойства/классы и их значения
// это нужно, чтобы не было возможности попасть на дубли в коде
// это обеспечивается благодаря надстройке module.css вместо просто css
// значением класса/свойства является уникальный айдишник, который присваивается каждому элементу,
// которому был присвоен класс
import s from './Header.module.css';
// import { articles } from '../fixture';

// Header - это компонента/функция, которая возвращает html разметку
const Header = (props) => {
    const { article } = props;
    // console.log("-----article: " + JSON.stringify(article));
    // const article = articles[0];
    return (
        // s.header - это объект s с классом header, который я сама придумала
        // и задала стили этому классу в css документе
        // вместо слова header может быть любое другое слово
        // можно задать и обычный класс: className='headerDiv'
        // но module.css позволяет упростить процесс постоянного придумывания классов
        // и отслеживание отсутствия дублей

        <header className={s.header}>
            <div>
                {article.title}
                {article.name}
            </div>
            <div className={s.chooseLogo}><span>#Choose Selector</span></div>
            {/* две точки значат, что я вышла из папки и зашла в папку img
            если у меня html находится в той же папке, что и папка img
            то выходить из неё не нужно и достаточно одной точки,
            чтобы зайти в папку img */}
            {/* <img src='./'></img> */}
            {/* <img src={flower}></img> */}
            {/* указала в ссылках путь к созданным страницам пока только к profile & dialogs, остальные ещё не создала */}
            {/* ссылки стали кликабельными в навигационной панели */}
            {/* <div className={s.item}><a href='/competition'>COMPETITION</a></div> */}
            {/* <div className={s.item}><a href='/top'>TOP</a></div> */}
            <Competition />
            <Top />
            <Hot />
            <New />
            <Search />
            <Login />
            <Submit />
            <Follow />
            {/* <div className={s.item}><a href='/new'>NEW</a></div> */}
        </header>
    )
}

// обязательно делаю экспорт функции, чтобы её можно было импортировать в любом файле проекта
export default Header;