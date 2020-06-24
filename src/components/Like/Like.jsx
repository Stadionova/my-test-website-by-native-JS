// import React from 'react';
import React, { Component } from 'react';
import s from './Like.module.css';

class Like extends Component {

    constructor() {

        super();

        this.state = {
            idea: ' ',
            count: 0
        };

        this.likeIdea = this.likeIdea.bind(this);
    }

    likeIdea() {
        let likeCount = document.querySelector('.likeIconCount');
        this.state.count += 1;
        likeCount.textContent = this.state.count;
        likeCount.style.paddingLeft = '5px';
        likeCount.style.fontSize = '10pt';
        return this.state.count;
    };

    render() {
        return (
            <div className={s.likeIcon}>
                <span onClick={this.likeIdea.bind(this)}>&#10084;</span>
                <span className='likeIconCount'>{this.likeIdea.bind(this)}</span>
            </div>
        )
    }
}

export default Like;