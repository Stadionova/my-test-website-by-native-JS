import React from 'react';
import s from './Submit.module.css';
import Ideas from '../Ideas/Ideas';

const Submit = () => {
    return (
        <div className={s.submit}>
            <button>Submit New Idea</button>
        </div>
    )
}

export default Submit;