import React from 'react';
import s from './Competition.module.css';

const Competition = (props) => {
    const { objProps } = props;
    return (
        <div className={s.competition}>
            {/* делаю проверку, передаётся объект в пропсах или нет */}
            {/* это нужно, потому что я вызываю компоненту в двух местах */}
            {/* в компоненте App.js и в Header.jsx */}
            {/* при первом вызове я передаю объект, при втором не передаю */}
            {/* поэтому скрипт падал не при первом вызове, а при втором */}
            {/* {objProps && objProps.age} */}
            {/* {objProps && objProps.city} */}
            <a href="#">COMPETITION</a>
        </div>
    )
}

export default Competition;