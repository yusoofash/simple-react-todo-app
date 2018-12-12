import React, { Component } from 'react';

export default class ListInput extends Component {
    state = {
        task: ''
    }

    changeHandler = (e) => {
        const task = e.target.value;

        this.setState({
            task
        });

    }

    submit = (e = null) => {

        e.preventDefault();

        if (this.state.task.length === 0) {
            return;
        }

        this.props.addTodo(this.state.task);

        this.setState(() => ({
            task: ''
        }));
    }

    render() {
        let button_className = 'fas cursor-pointer ';
        if (this.props.isEdit) {
            button_className += 'fa-check text-success';
        } else {
            button_className += 'fa-plus text-secondary';
        }
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <div className="list-input">
                    <input placeholder="Enter Task.." type="text" onChange={(e) => this.changeHandler(e)}
                        value={this.state.task} />
                    <i className={button_className} onClick={this.submit}></i>

                </div>
            </form>
        );
    }
}
