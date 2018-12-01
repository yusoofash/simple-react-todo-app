import React, { Component } from 'react';
import TodoItem from './ToDo-model';

export default class List extends Component {
    state = {
        current_id: null,
    }

    editTodo(val, id) {
        if (this.props.isEdit === false) {
            const todo = new TodoItem(id, val.task);
            this.props.editInput(todo);
            this.setState({
                current_id: id
            });
        }
    }

    deleteItem(id) {
        if (this.props.isEdit === false) {
            this.props.deleteTodo(id);
        }
    }

    render() {
        let list;
        if (this.props.items.length > 0) {
            const item = this.props.items.map((val, index) => {
                let isactive;
                if (this.props.isEdit) {
                    isactive = this.state.current_id === index ? 'bg-secondary ' : '';
                }
                return (
                    <li key={index} className={isactive}>
                        {val.task}
                        <div className="list-icons">
                            <i className="fas text-info cursor-pointer fa-pencil-alt" onClick={() => this.editTodo(val, index)}></i>
                            <i className="fas text-danger cursor-pointer fa-trash" onClick={() => this.deleteItem(index)}></i>
                        </div>
                    </li>
                )
            });
            list = <ul>{item}</ul>
        }
        return (
            <div>
                {list}
            </div>
        )
    }
}