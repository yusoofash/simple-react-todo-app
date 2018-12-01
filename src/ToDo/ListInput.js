import React, { Component } from 'react';
import TodoItem from './ToDo-model';

export default class ListInput extends Component {
    state = {
        todo: this.props.todo
    }

    componentDidUpdate(prevprops) {
        if (prevprops.isEdit !== this.props.isEdit) {
            const todo = Object.assign(this.state.todo, this.props.todo);
            this.setState(() => ({
                todo
            }));
        }
    }

    changeHandler = (e) => {
        const input = e.target.value;
        const todo = Object.assign({}, this.state.todo);
        todo.task = input;
        this.setState({
            todo
        });
    }

    onEnter = (e) => {
        if (e.keyCode === 13) {
            this.submit();
        }
    }

    submit = () => {
        if (this.state.todo.task.length === 0) {
            return;
        }

        if (this.props.todo.id !== null) {
            this.props.editTodo(this.props.todo.id, this.state.todo);
        } else {
            this.props.addTodo(this.state.todo);
        }

        const todo = new TodoItem();
        this.setState(() => ({
            todo
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
            <div className="list-input">
                <input placeholder="Enter Task.." type="text" onChange={this.changeHandler} onKeyUp={this.onEnter}
                    value={this.state.todo.task} />
                <i className={button_className} onClick={this.submit}></i>
            </div>
        );
    }
}
