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

    likeIdea(event) {
        let currentLikeCount = event.currentTarget.parentNode.querySelector('.likeIconCount');
        this.state.count += 1;
        currentLikeCount.textContent = this.state.count;
        currentLikeCount.style.paddingLeft = '5px';
        currentLikeCount.style.fontSize = '10pt';
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