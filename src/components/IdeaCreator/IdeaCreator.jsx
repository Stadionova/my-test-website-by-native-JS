import React, { Component } from 'react';

class IdeaCreator extends Component {

    constructor() {

        super();

        this.newIndex = 1;

    }

    createNewIdea(e) {
        if (e.key === 'Enter') {
            const newTask = {
                title: e.currentTarget.value,
                isDone: false,
                id: this.newIndex
            };

            this.props.onCreate(newTask);

            e.currentTarget.value = '';
            this.newIndex++;
        }
    }

    render() {
        return (
            <div className="header">
                <input onKeyPress={this.createNewIdea} />
            </div>
        );
    }
}

export default IdeaCreator;