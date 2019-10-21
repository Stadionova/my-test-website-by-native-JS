import React from 'react';
import s from './Search.module.css';

const Search = () => {
    return (
        <div className={s.search}>
            <div>
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Search;